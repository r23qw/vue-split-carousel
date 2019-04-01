<template>
  <div
    class="split-carousel-item"
    :style="{'padding-right':`${parent.itemBetweenSpace}px`,'width':`${parent.itemWidth}`}"
  >
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      parent: this.$parent
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
