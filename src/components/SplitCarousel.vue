<template>
  <div class="split-carousel" :style="{ height: `${height}px` }">
    <div class="split-carousel__left" @click="slide('prev')">
      <slot v-if="data.hasLeftSlot" name="left"></slot>
      <button class="split-carousel__left-button" v-else>
        <div class="arrow left"></div>
      </button>
    </div>
    <div
      ref="viewportDOMRef"
      class="split-carousel__viewport"
      :class="{ 'split-carousel__viewport--static': isStatic }"
    >
      <slot></slot>
    </div>
    <div class="split-carousel__right" @click="slide('next')">
      <slot v-if="data.hasRightSlot" name="right"></slot>
      <button class="split-carousel__right-button" v-else>
        <div class="arrow right"></div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
} from "vue";
import type {
  CarouselItem,
  InjectCarouselScope,
  ComponentUid,
  ResetInfo,
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
      default: false,
    },
    displayAmount: {
      type: Number,
      default: 4,
    },
    height: {
      type: Number,
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
  },
  setup(props, context) {
    const viewportDOMRef = ref<null | HTMLElement>(null);
    const data = reactive<{
      hasLeftSlot: boolean;
      hasRightSlot: boolean;
    }>({
      hasLeftSlot: context.slots.left !== undefined,
      hasRightSlot: context.slots.right !== undefined,
    });

    const items = ref<CarouselItem[]>([]);
    const addItem = (item: CarouselItem) => items.value.push(item);
    const removeItem = (uid: ComponentUid) => {
      const index = items.value.findIndex((item) => item.uid === uid);
      if (index !== -1) {
        items.value.splice(index, 1);
      }
    };

    const isStatic = computed(() => items.value.length <= props.displayAmount);

    const viewportWidth = ref(0);
    const gapWidth = computed(
      () =>
        (viewportWidth.value - props.itemWidth * props.displayAmount) /
        (props.displayAmount - 1)
    );
    const itemBlockWidth = computed(() => gapWidth.value + props.itemWidth);

    const activeIndex = ref(0);
    const isLastIndex = computed(
      () => activeIndex.value + props.displayAmount === items.value.length
    );
    const isFirstIndex = computed(() => activeIndex.value === 0);
    const isNeedReset = computed(
      () => props.displayAmount + 2 >= items.value.length
    );
    const resetInfo = reactive<ResetInfo>({
      value: false,
      action: "next",
    });

    const slide = (action: ResetInfo["action"]) => {
      if (isStatic.value) return;
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
      if (isNeedReset.value) {
        resetInfo.value = true;
        resetInfo.action = action;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resetInfo.value = false;
            setIndex();
          });
        });
      } else {
        setIndex();
      }
    };

    const stagInfo = computed(() => {
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
        if (resetInfo.action === "prev") {
          result.prependUid = -1;
        }
        if (resetInfo.action === "next") {
          result.appendUid = -1;
        }
      }
      return result;
    });

    provide<InjectCarouselScope>("injectCarouselScope", {
      speed: props.speed,
      isStatic,
      stagInfo,
      addItem,
      removeItem,
      viewportWidth,
      itemWidth: props.itemWidth,
      gapWidth,
      itemBlockWidth,
      resetInfo,
    });

    let timer: ReturnType<typeof setInterval>;
    //TODO:play

    onMounted(() => {
      nextTick(() => {
        if (viewportDOMRef.value !== null) {
          viewportWidth.value = viewportDOMRef.value.clientWidth;
        }
        if (props.autoplay) {
          timer = setInterval(() => {
            slide("next");
          }, props.interval);
        }
      });
      onUnmounted(() => {
        clearInterval(timer);
      });
    });

    return {
      data,
      slide,
      isStatic,
      viewportDOMRef,
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
