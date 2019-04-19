<template>
  <div class="container">
    <split-carousel
      :loop="loop"
      :autoplay="autoplay"
      :speed="speed"
      :interval="interval"
      :item-width="itemWidth"
      :item-align="itemAlign"
      :hover-cancel-play="hoverCancelPlay"
      :display-amount="displayAmount"
      :arrow-visible="arrowVisible"
      :height="height"
      :timing-function="timingFuntion"
      :arrow-area-width="arrowAreaWidth"
      :play-direction="playDirection"
      @change="handleChange"
    >
      <split-carousel-item
        v-for="item in list"
        :key="item"
      >
        <div
          class="item"
          :style="`background-image:url(${require(`./assets/${item%11}.png`)})`"
        >
        </div>
      </split-carousel-item>
    </split-carousel>
    <div class="operate">
      <el-form :inline="true">
        <el-col>
          <el-form-item>
            <strong
              style="padding-left:0"
              class="tips"
            > 💡 component properties start with ':' as prefix and assign the default value to the initial value </strong>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="Staic Mode">
            {{ isStaicMode }}
            <span class="tips">😮this property would be true while item amount less than or equal to display amount</span>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="item amount">
            <el-input-number
              v-model="list"
              :min="1"
              :max="20"
            />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label=":display-amount">
            <el-input-number
              v-model="displayAmount"
              :min="2"
              :max="10"
            />
          </el-form-item>
          <el-form-item label=":loop">
            <el-switch v-model="loop" />
          </el-form-item>
          <el-form-item label=":autoplay">
            <el-switch v-model="autoplay" />
          </el-form-item>
          <el-form-item label=":hover-cancel-play">
            <el-switch v-model="hoverCancelPlay" />
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label=":item-width">
            <div style="width:300px">
              <el-slider
                v-model="itemWidth"
                :min="20"
                :max="170"
              />
            </div>
          </el-form-item>
          <span class="tips">📌item width * display amount &lt;= available space</span>
        </el-col>
        <el-col>
          <el-form-item label=":timing-function">
            <el-select
              style="width:260px"
              v-model="timingFuntion"
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
                style="color:seagreen"
                target="_blank"
                href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function"
              >
                css transition timing function
              </a>
            </span>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label=":speed">
            <div style="width:300px">
              <el-slider
                v-model="speed"
                :min="100"
                :max="3000"
              />
            </div>
          </el-form-item>
          <el-form-item label=":interval">
            <div style="width:300px">
              <el-slider
                v-model="interval"
                :min="500"
                :max="10000"
              />
            </div>
          </el-form-item>
          <el-form-item label=":height">
            <div style="width:300px">
              <el-slider
                v-model="height"
                :min="40"
                :max="150"
              />
            </div>
          </el-form-item>
          <el-form-item label=":arrow-area-width">
            <div style="width:225px">
              <el-slider
                v-model="arrowAreaWidth"
                :min="30"
                :max="100"
              />
            </div>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label=":arrow-visible">
            <el-radio-group v-model="arrowVisible">
              <el-radio-button label="enable">
                enable
              </el-radio-button>
              <el-radio-button label="always">
                always
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label=":play-direction">
            <el-radio-group v-model="playDirection">
              <el-radio-button label="ltr">
                ltr
              </el-radio-button>
              <el-radio-button label="rtl">
                rtl
              </el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label=":item-align">
            <el-radio-group v-model="itemAlign">
              <el-radio-button label="left">
                left
              </el-radio-button>
              <el-radio-button label="center">
                center
              </el-radio-button>
              <el-radio-button label="right">
                right
              </el-radio-button>
            </el-radio-group>
            <span class="tips">🤡 available in static mode</span>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { SplitCarousel, SplitCarouselItem } from "../../../src/index.js";

  export default {
    created() {},
    components: {
      SplitCarousel,
      SplitCarouselItem
    },
    data() {
      return {
        list: 8,
        autoplay: true,
        loop: true,
        speed: 500,
        interval: 3000,
        displayAmount: 4,
        itemWidth: 120,
        arrowVisible: "enable",
        itemAlign: "center",
        hoverCancelPlay: true,
        height: 80,
        arrowAreaWidth: 50,
        playDirection: "ltr",
        timingFuntion: "ease",
        timingFuntionOptions: [
          {
            value: "ease",
            label: "ease"
          },
          {
            value: "ease-in",
            label: "ease-in"
          },
          {
            value: "ease-out",
            label: "ease-out"
          },
          {
            value: "ease-in-out",
            label: "ease-in-out"
          },
          {
            value: "linear",
            label: "linear"
          },
          {
            value: "steps(2, start)",
            label: "steps(2, start)"
          },
          {
            value: "cubic-bezier(0.06, 0.29, 0.19, 1.4)",
            label: "cubic-bezier(0.06, 0.29, 0.19, 1.4)"
          }
        ]
      };
    },
    methods: {
      handleChange() {
        console.log(arguments);
      }
    },
    computed: {
      isStaicMode() {
        return this.list <= this.displayAmount;
      }
    }
  };
</script>

<style scoped lang="scss">
  .container {
    padding-bottom: 40px;
    width: 800px;
    margin: 0 auto;
  }
  .operate {
    padding-top: 20px;
    overflow: hidden;
  }
  .el-form .el-form-item__label {
    font-weight: bold;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px #dcdfe6 solid;
    height: 100%;
    padding: 5px 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-origin: content-box;
  }
  .tips {
    color: #5e6d82;
    font-size: 14px;
    padding-left: 20px;
  }
</style>
