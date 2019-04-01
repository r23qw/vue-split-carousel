<template>
  <div class="split-carousel">
    <!-- 左箭头 -->
    <div class="arrow-control left-arrow">
      <div v-if="!$slots['left-arrow']">
        left
      </div>
      <slot name="left-arrow" />
    </div>
    <div class="content">
      <div class="item-container" :style="{width:containerWidth}">
        <slot />
      </div>
    </div>
    <!-- 右箭头 -->
    <div class="arrow-control right-arrow">
      <slot name="right-arrow" />
      <div v-if="typeof $slots['right-arrow'] ==='undefined'">
        right
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 300
    },
    displayAmount: {
      type: Number,
      default: 5
    },
    itemWidth: {
      type: String,
      default: '150px'
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      space: 0
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    // console.log(this)
    let containerWidth = window.getComputedStyle(this.$el).width
    containerWidth = Number.parseInt(containerWidth)
    let space = (containerWidth - this.displayAmount * this.itemWidth) / (this.displayAmount - 1)
    if (space < 0 && process.env.NODE_ENV !== 'production') {
      throw Error('item space is compute as a negative value,please adjust container width and item width')
    }
    this.space = space
  },
  computed: {
    itemAmount () {
      return this.$slots.default.length
    },
    containerWidth () {
      let ratio = this.itemAmount / this.displayAmount
      return `calc(${ratio * 100}% + ${this.itemBetweenSpace * this.displayAmount}px)`
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
