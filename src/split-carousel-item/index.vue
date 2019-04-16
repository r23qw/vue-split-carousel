<template>
  <div v-if="inStage"
       v-show="isMounted"
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
    this.$nextTick(() => { this.isMounted = true })
  },
  computed: {
    itemIndex () {
      return this.$parent.itemList.indexOf(this.$vnode)
    },
    stageIndex () {
      return this.$parent.itemStageIndexList.indexOf(this.itemIndex)
    },
    noMarginRight () {
      return this.$parent.isStaticMode &&
             this.itemIndex === this.$parent.itemAmount - 1
    },
    inStage () {
      return this.$parent.isStaticMode || this.stageIndex !== -1
    },
    noAnimate () {
      let last = this.$parent.itemStageIndexList.length - 1
      return this.$parent.isReseting ||
             !this.isMounted ||
             (this.prevIndex === 0 && this.stageIndex === last) ||
             (this.prevIndex === last && this.stageIndex === 0) ||
             (this.prevIndex === this.stageIndex)
    },
    itemStyle () {
      let style = {
        'margin-right': `${this.noMarginRight ? 0 : this.$parent.itemSpace}${this.$parent.cssUnit}`,
        'width': `${this.$parent.itemWidth}${this.$parent.cssUnit}`,
        'transition-timing-function': this.$parent.timingFunction
      }
      if (!this.$parent.isStaticMode) {
        style = Object.assign(style, {
          'left': `${this.stageIndex * (this.$parent.itemWidthWithSpace)}${this.$parent.cssUnit}`,
          'transition-duration': `${this.noAnimate ? 0 : this.$parent.speed}ms`
        })
      }
      return style
    }
  },
  watch: {
    stageIndex (val, oldVal) {
      this.prevIndex = oldVal === void 0 ? this.stageIndex : oldVal
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
