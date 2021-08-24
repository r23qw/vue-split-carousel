<template>
  <div
    class="split-carousel"
    :style="{
      height: `${typeof height === 'string' ? height : `${height}px`}`,
    }"
  >
    <div class="split-carousel__left" @click="prev">
      <div v-show="isLeftArrowVisiable">
        <slot v-if="hasLeftSlot" name="left"></slot>
        <button class="split-carousel__left-button" v-else>
          <div class="arrow left"></div>
        </button>
      </div>
    </div>
    <div
      ref="viewportDOMRef"
      class="split-carousel__viewport"
      @mouseenter="enter"
      @mouseleave="leave"
      :class="{ 'split-carousel__viewport--static': layout.isStatic }"
    >
      <slot></slot>
    </div>
    <div class="split-carousel__right" @click="next">
      <div v-show="isRightArrowVisiable">
        <slot v-if="hasRightSlot" name="right"></slot>
        <button class="split-carousel__right-button" v-else>
          <div class="arrow right"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import type {
  CarouselItem,
  CarouselLayout,
  CarouselReset,
  ComponentUid,
  InjectCarouselScope,
} from "./carousel";

export default defineComponent({
  name: "SplitCarousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 500,
    },
    interval: {
      type: Number,
      default: 3000,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    displayAmount: {
      type: Number,
      default: 4,
    },
    height: {
      type: [Number, String],
      default: 80,
    },
    itemWidth: {
      type: Number,
      default: 120,
    },
    pauseOnHover: {
      type: Boolean,
      default: true,
    },
    timingFunction: {
      type: String,
      default: "ease",
    },
    arrowVisible: {
      type: String,
      validator: (i: string) => ["default", "always"].includes(i),
      default: "default",
    },
  },
  setup(props, context) {
    const viewportDOMRef = ref<null | HTMLElement>(null);

    const items = ref<CarouselItem[]>([]);
    const addItem = (item: CarouselItem) => items.value.push(item);
    const removeItem = (uid: ComponentUid) => {
      const index = items.value.findIndex((item) => item.uid === uid);
      if (index !== -1) {
        items.value.splice(index, 1);
      }
    };
    // layout
    const viewportWidth = ref(0);
    const layout: ComputedRef<CarouselLayout> = computed(() => {
      const gapWidth =
        (viewportWidth.value - props.itemWidth * props.displayAmount) /
        (props.displayAmount - 1);
      const itemBlockWidth = gapWidth + props.itemWidth;
      return {
        isStatic: items.value.length <= props.displayAmount,
        gapWidth,
        viewportWidth: viewportWidth.value,
        itemWidth: props.itemWidth,
        itemBlockWidth,
        prependPosition: -1 * itemBlockWidth,
        appendPostion: viewportWidth.value + gapWidth,
      };
    });

    // index
    const activeIndex = ref(0);
    const isLastIndex = computed(
      () => activeIndex.value + props.displayAmount === items.value.length
    );
    const isFirstIndex = computed(() => activeIndex.value === 0);
    const isNeedReset = computed(
      () => props.displayAmount + 2 >= items.value.length
    );
    const reset = reactive<CarouselReset>({
      resetting: false,
      action: "next",
    });

    const stag = computed(() => {
      const index = activeIndex.value;
      const list = items.value;
      const endIndex = list.length - 1;

      const stagUids = Array.from({ length: props.displayAmount }).map(
        (v, offset) => list[(index + offset) % list.length]?.uid
      );

      const result = {
        prependUid: list[isFirstIndex.value ? endIndex : index - 1]?.uid,
        stagUids,
        appendUid: list[(index + props.displayAmount) % list.length]?.uid,
      };
      if (result.prependUid === result.appendUid) {
        const invalidUid = -1;
        if (reset.action === "prev") {
          result.prependUid = invalidUid;
        }
        if (reset.action === "next") {
          result.appendUid = invalidUid;
        }
      }
      return result;
    });
    const refsProps = toRefs(props);
    provide<InjectCarouselScope>("injectCarouselScope", {
      speed: refsProps.speed,
      timingFunction: refsProps.timingFunction,
      stag,
      reset,
      addItem,
      removeItem,
      layout,
    });

    //arrow
    const isLeftArrowVisiable = computed(() => {
      if (props.arrowVisible === "default") {
        if (layout.value.isStatic) {
          return false;
        }
        if (isFirstIndex.value && !props.loop) {
          return false;
        }
      }
      return true;
    });
    const isRightArrowVisiable = computed(() => {
      if (props.arrowVisible === "default") {
        if (layout.value.isStatic) {
          return false;
        }
        if (isLastIndex.value && !props.loop) {
          return false;
        }
      }
      return true;
    });

    // play method
    const slide = (action: CarouselReset["action"]) => {
      if (layout.value.isStatic) return;
      if (!props.loop) {
        if (action === "next" && isLastIndex.value) return;
        if (action === "prev" && isFirstIndex.value) return;
      }

      const setIndex = () => {
        if (action === "next") {
          activeIndex.value = (activeIndex.value + 1) % items.value.length;
        }
        if (action === "prev") {
          activeIndex.value = isFirstIndex.value
            ? items.value.length - 1
            : activeIndex.value - 1;
        }
      };

      if (!isNeedReset.value) {
        setIndex();
        return;
      }

      reset.resetting = true;
      reset.action = action;
      requestAnimationFrame(() => {
        // this frame setting edge item position
        requestAnimationFrame(() => {
          reset.resetting = false;
          setIndex();
        });
      });
    };
    let timer: ReturnType<typeof setTimeout>;
    const next = () => {
      clearTimeout(timer);
      slide("next");
      if (props.autoplay) {
        timer = setTimeout(() => next(), props.interval);
      }
    };
    const prev = () => {
      clearTimeout(timer);
      slide("prev");
      if (props.autoplay) {
        timer = setTimeout(() => prev(), props.interval);
      }
    };
    const enter = () => {
      if (props.autoplay && props.pauseOnHover) {
        clearTimeout(timer);
      }
    };
    const leave = () => {
      if (props.autoplay && props.pauseOnHover) {
        clearTimeout(timer);
        timer = setTimeout(() => next(), props.interval);
      }
    };

    // autoplay
    watch(
      () => props.autoplay,
      (autoplay) => {
        if (autoplay) {
          timer = setTimeout(() => next(), props.interval);
        } else {
          clearTimeout(timer);
        }
      }
    );
    const handlePageVisiblityChange = () => {
      if (document.visibilityState === "hidden") {
        clearTimeout(timer);
      }
      if (document.visibilityState === "visible" && props.autoplay) {
        timer = setTimeout(() => next(), props.interval);
      }
    };

    // init layout,handle page visibility
    onMounted(() => {
      nextTick(() => {
        if (viewportDOMRef.value !== null) {
          viewportWidth.value = viewportDOMRef.value.clientWidth;
        }

        if (props.autoplay) {
          timer = setTimeout(() => next(), props.interval);
        }

        document.addEventListener(
          "visibilitychange",
          handlePageVisiblityChange
        );
      });
    });
    onUnmounted(() => {
      clearTimeout(timer);

      document.removeEventListener(
        "visibilitychange",
        handlePageVisiblityChange
      );
    });

    return {
      prev,
      next,
      enter,
      leave,
      layout,
      viewportDOMRef,
      hasLeftSlot: context.slots.left !== undefined,
      hasRightSlot: context.slots.right !== undefined,
      isLeftArrowVisiable,
      isRightArrowVisiable,
    };
  },
});
</script>

<style scoped lang="scss">
.split-carousel {
  display: flex;
  width: 100%;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &__viewport {
    flex-grow: 1;
    overflow: hidden;
    align-self: stretch;
    position: relative;
    &--static {
      display: flex;
      align-items: center;
      justify-content: space-between;
      ::v-deep .split-carousel__item {
        align-self: stretch;
      }
    }
  }
  &__left,
  &__right {
    align-self: center;
    padding: 5px;
  }
  &__left-button,
  &__right-button {
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;
    cursor: pointer;
    background-color: #fff;
    transition: border-color, background-color 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-color: #c6e2ff;
      background-color: #ecf5ff;
      .arrow {
        border-top-color: #c6e2ff;
        border-left-color: #c6e2ff;
      }
    }
  }
}
.arrow {
  height: 6px;
  width: 6px;
  border: 2px solid;
  transition: border-color 0.15s;
  border-top-color: #dcdfe6;
  border-left-color: #dcdfe6;
  border-right-color: transparent;
  border-bottom-color: transparent;
  &.left {
    transform: translateX(2px) rotate(-45deg);
  }
  &.right {
    transform: translateX(-2px) rotate(135deg);
  }
}
</style>
