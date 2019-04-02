<template>
  <div class="split-carousel-item"
       :style="{
         'margin-right':`${$parent.itemSpace}${$parent.cssUnit}`,
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
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
