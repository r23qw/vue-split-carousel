<script setup lang="ts">
import {SplitCarousel,SplitCarouselItem} from "split-carousel"
</script>

<template>
  <SplitCarousel style="width:100%">
    <SplitCarouselItem v-for="i in 8" :key="i" style="border:1px solid #000;box-sizing: border-box;">
      {{ i }}
    </SplitCarouselItem>
  </SplitCarousel>
</template>

