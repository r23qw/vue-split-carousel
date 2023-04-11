<script setup lang="ts">
// import { SplitCarousel, SplitCarouselItem } from 'vue-split-carousel/vue2.7'
</script>

<template>
  <SplitCarousel>
    <SplitCarouselItem v-for="i in 8" :key="i">{{ i }}</SplitCarouselItem>
  </SplitCarousel>
</template>

