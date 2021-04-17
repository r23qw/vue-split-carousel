<template>
  <div
    class="split-carousel__item"
    :class="{ 'split-carousel__item--transition': !isStatic }"
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
  watch,
  nextTick,
} from "vue";
import type { ComponentStyle, InjectCarouselScope } from "./carousel";

export default defineComponent({
  name: "SplitCarouselItem",
  setup() {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    const injectCarouselScope: InjectCarouselScope | undefined = inject(
      "injectCarouselScope"
    ) as InjectCarouselScope;
    const isMounted = ref(false);
    if (!instance || !injectCarouselScope) {
      return {};
    }
    // register/unregister
    onMounted(() => {
      injectCarouselScope.addItem({ uid: instance.uid });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isMounted.value = true;
        });
      });
    });
    onUnmounted(() => {
      injectCarouselScope.removeItem(instance.uid);
    });

    const isPrepend = computed(
      () => instance.uid === injectCarouselScope.stagInfo.value.prependUid
    );
    const isAppend = computed(
      () => instance.uid === injectCarouselScope.stagInfo.value.appendUid
    );

    const stagIndex = computed(() => {
      return injectCarouselScope.stagInfo.value.stagUids.findIndex(
        (uid) => uid === instance.uid
      );
    });
    const prevIndex = ref(0);
    watch(
      () => stagIndex.value,
      (val, prev) => {
        prevIndex.value = prev;
      }
    );
    const inStag = computed(() => stagIndex.value !== -1);
    const noAnimate = computed(() => {
      if (!isMounted.value) {
        return true;
      }
      if (injectCarouselScope.resetInfo.value) {
        return true;
      }
      return false;
    });

    const itemStyle = computed(() => {
      let style: ComponentStyle = {};

      style.width = `${injectCarouselScope.itemWidth}px`;
      console.log(noAnimate.value);
      style.transitionDuration = `${
        noAnimate.value ? 0 : injectCarouselScope.speed
      }ms`;

      if (injectCarouselScope.isStatic.value) {
        style.display = "block";
        return style;
      }

      if (inStag.value) {
        style = {
          ...style,
          display: "block",
          transform: `translateX(${
            stagIndex.value * injectCarouselScope.itemBlockWidth.value
          }px)`,
        };
      }
      if (isPrepend.value) {
        const needReset =
          injectCarouselScope.resetInfo.value &&
          injectCarouselScope.resetInfo.action === "next";
        style = {
          ...style,
          display: "block",
          transform: `translateX(${
            needReset
              ? injectCarouselScope.viewportWidth.value +
                injectCarouselScope.gapWidth.value
              : -1 * injectCarouselScope.itemBlockWidth.value
          }px)`,
        };
      }
      if (isAppend.value) {
        const needReset =
          injectCarouselScope.resetInfo.value &&
          injectCarouselScope.resetInfo.action === "prev";
        style = {
          ...style,
          display: "block",
          transform: `translateX(${
            needReset
              ? -1 * injectCarouselScope.itemBlockWidth.value
              : injectCarouselScope.viewportWidth.value +
                injectCarouselScope.gapWidth.value
          }px)`,
        };
      }

      return style;
    });
    return {
      itemStyle,
      isStatic: injectCarouselScope.isStatic,
      isPrepend,
      isAppend,
      inStag,
      stagIndex,
      prevIndex,
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
