<script setup>
import {SplitCarousel,SplitCarouselItem} from "split-carousel"
export default {
  components:{
    SplitCarousel,
    SplitCarouselItem
  }
}
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


