<script setup>
import {SplitCarousel,SplitCarouselItem} from "vue-split-carousel"
</script>

<template>
  <SplitCarousel style="width:100%">
    <SplitCarouselItem v-for="i in 8">{{ i }}</SplitCarouselItem>
  </SplitCarousel>
</template>

