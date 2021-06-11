<template>
  <div
    class="split-carousel__item"
    :class="{ 'split-carousel__item--transition': !layout.isStatic }"
    :style="itemStyle"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  computed,
  ref,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
} from "vue";
import type { ComponentStyle, InjectCarouselScope } from "./carousel";

export default defineComponent({
  name: "SplitCarouselItem",
  setup() {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    const injectCarouselScope: InjectCarouselScope = inject(
      "injectCarouselScope"
    ) as InjectCarouselScope;
    const isMounted = ref(false);

    if (!instance || !injectCarouselScope) {
      throw Error("SplitCarouselItem Must include by SplitCarousel");
    }

    const { layout, stag, reset, addItem, removeItem } = injectCarouselScope;
    // register/unregister
    onMounted(() => {
      addItem({ uid: instance.uid });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isMounted.value = true;
        });
      });
    });
    onUnmounted(() => {
      removeItem(instance.uid);
    });

    // itemStyle
    const isPrepend = computed(() => instance.uid === stag.value.prependUid);
    const isAppend = computed(() => instance.uid === stag.value.appendUid);
    const stagIndex = computed(() => {
      return stag.value.stagUids.findIndex((uid) => uid === instance.uid);
    });

    const inStag = computed(() => stagIndex.value !== -1);
    const noAnimate = computed(() => {
      if (!isMounted.value) {
        return true;
      }
      if (reset.resetting) {
        return true;
      }
      return false;
    });

    const itemStyle = computed(() => {
      const {
        itemWidth,
        isStatic,
        itemBlockWidth,
        appendPostion,
        prependPosition,
      } = layout.value;

      let style: ComponentStyle = {
        width: `${itemWidth}px`,
        transitionDuration: `${
          noAnimate.value ? 0 : injectCarouselScope.speed.value
        }ms`,
        transitionTimingFunction: injectCarouselScope.timingFunction.value,
      };

      if (isStatic) {
        style.display = "block";
        return style;
      }

      if (inStag.value) {
        style = {
          ...style,
          display: "block",
          transform: `translateX(${stagIndex.value * itemBlockWidth}px)`,
        };
      }
      if (isPrepend.value) {
        const needReset = reset.resetting && reset.action === "next";
        style = {
          ...style,
          display: "block",
          transform: `translateX(${
            needReset ? appendPostion : prependPosition
          }px)`,
        };
      }
      if (isAppend.value) {
        const needReset = reset.resetting && reset.action === "prev";
        style = {
          ...style,
          display: "block",
          transform: `translateX(${
            needReset ? prependPosition : appendPostion
          }px)`,
        };
      }

      return style;
    });

    return {
      itemStyle,
      layout,
    };
  },
});
</script>

<style scoped lang="scss">
.split-carousel__item {
  display: none;
  transition-property: transform;
  will-change: transfrom;
  &--transition {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }
  &--stag {
    display: block;
  }
}
</style>
