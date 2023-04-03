<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  ref,
} from 'vue-demi'
import type { ComponentStyle, InjectCarouselScope } from './carousel'

export default defineComponent({
  name: 'SplitCarouselItem',
  setup() {
    let instance = getCurrentInstance()!
    let uid = Math.random()
    const injectCarouselScope: InjectCarouselScope = inject(
      'injectCarouselScope',
    ) as InjectCarouselScope
    const isMounted = ref(false)

    if (!instance || !injectCarouselScope)
      throw new Error('SplitCarouselItem Must include by SplitCarousel')

    const { layout, stag, reset, addItem, removeItem } = injectCarouselScope
    // register/unregister
    onMounted(() => {
      addItem({ uid })
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isMounted.value = true
        })
      })
    })
    onUnmounted(() => {
      removeItem(uid)
    })

    // itemStyle
    const isPrepend = computed(() => uid === stag.value.prependUid)
    const isAppend = computed(() => uid === stag.value.appendUid)
    const stagIndex = computed(() => {
      return stag.value.stagUids.findIndex(id => id === uid)
    })

    const inStag = computed(() => stagIndex.value !== -1)
    const noAnimate = computed(() => {
      if (!isMounted.value)
        return true

      if (reset.resetting)
        return true

      return false
    })

    const itemStyle = computed(() => {
      const {
        itemWidth,
        isStatic,
        itemBlockWidth,
        appendPostion,
        prependPosition,
      } = layout.value

      let style: ComponentStyle = {
        width: `${itemWidth}px`,
        transitionDuration: `${noAnimate.value ? 0 : injectCarouselScope.speed.value
          }ms`,
        transitionTimingFunction: injectCarouselScope.timingFunction.value,
      }

      if (isStatic) {
        style.display = 'block'
        return style
      }

      if (inStag.value) {
        style = {
          ...style,
          display: 'block',
          transform: `translateX(${stagIndex.value * itemBlockWidth}px)`,
        }
      }
      if (isPrepend.value) {
        const needReset = reset.resetting && reset.action === 'next'
        style = {
          ...style,
          display: 'block',
          transform: `translateX(${needReset ? appendPostion : prependPosition
            }px)`,
        }
      }
      if (isAppend.value) {
        const needReset = reset.resetting && reset.action === 'prev'
        style = {
          ...style,
          display: 'block',
          transform: `translateX(${needReset ? prependPosition : appendPostion
            }px)`,
        }
      }

      return style
    })

    return {
      itemStyle,
      layout,
    }
  },
})
</script>

<template>
  <div class="split-carousel__item" :class="{ 'split-carousel__item--transition': !layout.isStatic }" :style="itemStyle">
    <slot />
  </div>
</template>

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
