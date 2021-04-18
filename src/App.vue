<template>
  <div class="wrapper">
    <SplitCarousel v-bind="option">
      <SplitCarouselItem v-for="item in itemAmount" :key="item">
        <div class="box">{{ item }}</div>
      </SplitCarouselItem>
    </SplitCarousel>
    <div class="operator">
      <el-form label-suffix=":" label-width="120px">
        <el-form-item label="item amount">
          <el-input-number v-model="itemAmount" :min="1" />
        </el-form-item>
        <h3>props:</h3>
        <el-form-item label="display-amount">
          <el-input-number v-model="option.displayAmount" :min="1" />
        </el-form-item>
        <el-form-item label="autoplay">
          <el-switch v-model="option.autoplay" />
        </el-form-item>
        <el-form-item label="loop">
          <el-switch v-model="option.loop" />
        </el-form-item>
        <el-form-item label="pause-on-hover">
          <el-switch v-model="option.pauseOnHover" />
        </el-form-item>
        <el-form-item label="arrow-visible">
          <el-radio-group v-model="option.arrowVisible">
            <el-radio-button label="default" />
            <el-radio-button label="always" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="timing-function">
          <el-select
            style="width: 260px"
            v-model="option.timingFunction"
            placeholder="timing function"
          >
            <el-option
              v-for="item in timingFuntionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <span class="tips">
            🌏more details reference:
            <a
              style="color: seagreen"
              target="_blank"
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function"
            >
              css transition timing function
            </a>
          </span>
        </el-form-item>
        <el-form-item label="speed">
          <el-slider v-model="option.speed" :max="1500" />
        </el-form-item>
        <el-form-item label="interval">
          <el-slider v-model="option.interval" :max="6000" />
        </el-form-item>
        <el-form-item label="height">
          <el-slider v-model="option.height" :min="20" :max="200" />
        </el-form-item>
        <el-form-item label="itemWidth">
          <el-slider v-model="option.itemWidth" :min="20" :max="200" />
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
      itemAmount: 6,
      option: {
        displayAmount: 4,
        autoplay: true,
        speed: 500,
        interval: 3000,
        loop: true,
        height: 80,
        itemWidth: 120,
        pauseOnHover: true,
        timingFunction: "ease",
        arrowVisible: "default",
      },
      timingFuntionOptions: [
        {
          value: "ease",
          label: "ease",
        },
        {
          value: "ease-in",
          label: "ease-in",
        },
        {
          value: "ease-out",
          label: "ease-out",
        },
        {
          value: "ease-in-out",
          label: "ease-in-out",
        },
        {
          value: "linear",
          label: "linear",
        },
        {
          value: "steps(2, start)",
          label: "steps(2, start)",
        },
        {
          value: "cubic-bezier(0.06, 0.29, 0.19, 1.4)",
          label: "cubic-bezier(0.06, 0.29, 0.19, 1.4)",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.operator {
  padding: 30px 0;
}
</style>
