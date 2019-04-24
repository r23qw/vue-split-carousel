<template>
  <split-carousel :autoplay="false">
    <split-carousel-item v-for="item in 8" :key="item">
      {{ item }}
    </split-carousel-item>
  </split-carousel>
</template>

<script>
import { SplitCarousel, SplitCarouselItem } from '../src/index.js'
export default {
  components: {
    SplitCarousel,
    SplitCarouselItem
  }
}
</script>
