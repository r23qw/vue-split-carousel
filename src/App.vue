<template>
  <SplitCarousel>
    <SplitCarouselItem v-for="item in 10" :key="item">
      {{ item }}
    </SplitCarouselItem>
  </SplitCarousel>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SplitCarousel from "./components/SplitCarousel.vue";
import SplitCarouselItem from "./components/SplitCarouselItem.vue";

export default defineComponent({
  name: "App",
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
