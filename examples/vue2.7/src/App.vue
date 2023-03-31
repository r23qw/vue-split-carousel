<script setup lang="ts">
import {SplitCarousel,SplitCarouselItem} from "vue-split-carousel"
</script>

<template>
  <SplitCarousel>
    <SplitCarouselItem v-for="i in 8" :key="i" style="border:1px solid #000;box-sizing: border-box;">
      <div style="border:1px">
        {{ i }}
      </div>
    </SplitCarouselItem>
  </SplitCarousel>
</template>


