<template>
  <div v-if="inStage"
       class="split-carousel-item"
       :style="{
         'margin-right':`${noMarginRight ? 0 : $parent.itemSpace}${$parent.cssUnit}`,
         'width':`${$parent.itemWidth}${$parent.cssUnit}`
       }">
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
    return {}
  },
  computed: {
    itemIndex () {
      // console.log(this.$parent.itemList, this)
      return this.$parent.itemList.indexOf(this.$vnode)
    },
    noMarginRight () {
      return this.$parent.isStaticMode && this.itemIndex === this.$parent.itemAmount - 1
    },
    inStage () {
      if (this.$parent.isStaticMode) {
        return true
      }

      return true
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
