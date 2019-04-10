<template>
  <div v-if="inStage"
       class="split-carousel-item"
       :class="{'is-static':$parent.isStaticMode}"
       :style="itemStyle">
    <div class="split-carousel-item--content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$parent && this.$parent.updateItems()
  },
  destroyed () {
    this.$parent && this.$parent.updateItems()
  },
  data () {
    return {
      prevIndex: -1,
      isMounted: false
    }
  },
  mounted () {
    this.prevIndex = this.stageIndex
    setTimeout(() => { this.isMounted = true }, 100)
  },
  computed: {
    itemIndex () {
      return this.$parent.itemList.indexOf(this.$vnode)
    },
    stageIndex () {
      let index = this.$parent.itemStageIndexList.indexOf(this.itemIndex)
      return index
    },
    noMarginRight () {
      return (
        this.$parent.isStaticMode &&
          this.itemIndex === this.$parent.itemAmount - 1
      )
    },
    inStage () {
      if (this.$parent.isStaticMode) {
        return true
      }
      return this.stageIndex !== -1
    },
    noAnimate () {
      let last = this.$parent.itemStageIndexList.length - 1
      return (this.prevIndex === 0 && this.stageIndex === last) ||
      (this.prevIndex === last && this.stageIndex === 0) ||
      (this.prevIndex === last && this.stageIndex === last) ||
      (this.prevIndex === 0 && this.stageIndex === 0) ||
      !this.isMounted
    },
    itemStyle () {
      let style = {
        'margin-right': `${this.noMarginRight ? 0 : this.$parent.itemSpace}${this.$parent.cssUnit}`,
        'width': `${this.$parent.itemWidth}${this.$parent.cssUnit}`
      }
      if (!this.$parent.isStaticMode) {
        style = Object.assign(style, {
          // 'transform': `translateX(${`${this.stageIndex * (this.$parent.itemWidthWithSpace)}${this.$parent.cssUnit}`})`,
          'left': `${this.stageIndex * (this.$parent.itemWidthWithSpace)}${this.$parent.cssUnit}`,
          'transition-duration': `${this.noAnimate ? 0 : this.$parent.speed}ms`
        })
      }
      return style
    }
  },
  watch: {
    stageIndex (val, oldVal) {
      this.prevIndex = oldVal || this.stageIndex
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
