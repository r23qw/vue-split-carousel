<template>
  <div class="wrapper">
    <SplitCarousel v-bind="option">
      <SplitCarouselItem v-for="item in itemList" :key="item.name">
        <div class="box">
          <img :src="item.url" :alt="item.name">
        </div>
      </SplitCarouselItem>
    </SplitCarousel>
    <details>
      <summary>Component Code By Current Config</summary>
      <pre class="code">{{ componentCode }}</pre>
    </details>
    <div class="operator">
      <el-form label-suffix=":" label-width="120px">
        <el-form-item label="item amount">
          <el-input-number v-model="itemAmount" :min="1" :max="26"/>
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
          <el-select style="width: 260px" v-model="option.timingFunction" placeholder="timing function">
            <el-option v-for="item in timingFuntionOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span class="tips">
            🌏more details reference:
            <a style="color: seagreen" target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function">
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
        <el-form-item v-if="typeof option.height === 'number'" label="height">
          <el-slider v-model="option.height" :min="20" :max="200" />
        </el-form-item>
        <el-form-item label="item-width">
          <el-slider v-model="option.itemWidth" :min="20" :max="200" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { SplitCarousel, SplitCarouselItem } from 'split-carousel'
import { defineComponent } from "vue";
const defaultConfig = {
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
};
const kebabize = (str: string) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

export default defineComponent({
  name: "App",
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
  data() {
    return {
      itemAmount: 10,
      option: { ...defaultConfig },

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
  computed: {
    diffConfig() {
      const keys = Object.keys(defaultConfig) as (keyof typeof defaultConfig)[];
      const result: Partial<typeof defaultConfig> = {};
      keys.forEach((key) => {
        if (this.option[key] !== defaultConfig[key]) {
          result[key] = this.option[key] as any;
        }
      });
      return result;
    },
    componentCode() {
      const optionString = Object.entries(this.diffConfig)
        .map(([key, value]) => {
          const stringKey = ["timingFunction", "arrowVisible"];
          return `${stringKey.includes(key) ? "" : ":"}${kebabize(
            key
          )}="${value}"`;
        })
        .join(" ");
      return `
<SplitCarousel ${optionString}>
  <SplitCarouselItem v-for="item in ${this.itemAmount}" :key="item">
    {{ item }}
  </SplitCarouselItem>
</SplitCarousel>
`;
    },
    itemList(){
      let icons = [
        "html5",
        "css3",
        "nodejs",
        "typescript",
        "linux",
        "mozilla",
        "github",
        "vuejs",
        "webpack",
        "nestjs",
        "go",
        "jquery",
        "kubernetes",
        "sveltejs",
        "electron",
        "element-ui",
        "eslint",
        "lit",
        "nextjs",
        "npm",
        "prettier",
        "rust",
        "solidjs",
        "vitejs",
        "vitest",
        "vs",
        "webassembly",
    ]
      return icons.slice(0, this.itemAmount).map(key=>({name:key,url:`https://raw.githubusercontent.com/r23qw/file-storage/main/image/${key}.svg`}))
    }
  },
});
</script>

<script setup></script>

<style>
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
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.operator {
  padding: 30px 0;
}

.code {
  margin: 0;
}

details {
  padding: 25px 0 0 10px;
}
</style>