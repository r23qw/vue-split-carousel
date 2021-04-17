<template>
  <div class="wrapper">
    <SplitCarousel :speed="1000" loop :display-amount="option.displayAmount">
      <SplitCarouselItem v-for="item in option.itemAmount" :key="item">
        <div class="box">{{ item }}</div>
      </SplitCarouselItem>
    </SplitCarousel>
    <div class="operator">
      <el-form label-suffix=":">
        <el-form-item label="item amount">
          <el-input-number v-model="option.itemAmount" :min="1" />
        </el-form-item>
        <el-form-item>
          <el-input-number v-model="option.displayAmount" :min="1" />
        </el-form-item>
      </el-form>
    </div>
  </div>
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
  data() {
    return {
      option: {
        itemAmount: 6,
        displayAmount: 4,
      },
    };
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
.wrapper {
  width: 800px;
  margin: 0 auto;
}
.box {
  border: 1px solid #eee;
  height: 100%;
  box-sizing: border-box;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
