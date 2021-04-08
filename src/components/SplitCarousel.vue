<template>
  <div class="split-carousel">
    SplitCarousel
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SplitCarousel",
});
</script>

<style scoped lang="scss">
.split-carousel {
  border: 1px;
}
</style>
