<template>
  <div class="split-carousel-item">
    SplitCarouselItem
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SplitCarouselItem",
});
</script>

<style scoped lang="scss">
.split-carousel-item {
  border: 1px;
}
</style>
