<template>
  <SplitCarousel>
    <SplitCarouselItem v-for="i in 8" :key="i">{{ i }}</SplitCarouselItem>
  </SplitCarousel>
</template>

<script>
import Vue from 'vue'
import {SplitCarousel,SplitCarouselItem} from 'vue-split-carousel/dist/v2/index.cjs'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    SplitCarousel,
    SplitCarouselItem
  }
})
</script>
