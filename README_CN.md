[English Document](./README.md)

# Vue Split Carousel

[![Build Status](https://travis-ci.com/Aaron00101010/vue-split-carousel.svg?branch=master)](https://travis-ci.com/Aaron00101010/vue-split-carousel)
![GitHub](https://img.shields.io/github/license/aaron00101010/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)
<br>
<br>
同时展示多个轮播项的轮播图，支持服务段渲染，兼容 IE 10+ 以上浏览器
<br>
<br>
![show](./examples/GIF.gif)  

### [Playground](https://aaron00101010.github.io/vue-split-carousel/)  

# 安装

## npm 引用

### 安装依赖

```bash
npm i vue-split-carousel -S
```

### 组件内使用

<details>

<summary><strong>示例代码</strong></summary>

```html
<template>
  <div id="app">
    <split-carousel>
      <split-carousel-item v-for="item in 8" :key="item">
        {{ item }}
      </split-carousel-item>
    </split-carousel>
  </div>
</template>

<script>
  import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
  export default {
    components: {
      SplitCarousel,
      SplitCarouselItem
    }
  };
</script>

<style>
  #app {
    width: 800px;
    margin: 60px auto;
  }
</style>
```

</details>

### 全局使用

<details>

<summary><strong>示例代码</strong></summary>

```js
import Vue from "vue";
import App from "./App.vue";

import SplitCarousel from "vue-split-carousel";
import "vue-split-carousel/dist/vue-split-carousel.css";
Vue.use(SplitCarousel);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

</details>

## `<script>` 标签应用

1. 引用组件样式
2. 引用 vue.js
3. 引用 vue-split-carousel.umd.js

<details>

<summary><strong>示例代码</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- import component-style -->
    <link rel="stylesheet" href="./vue-split-carousel.css" />
  </head>
  <body>
    <div id="app" style="width:800px;margin:0 auto;">
      <split-carousel>
        <split-carousel-item v-for="item in list" :key="item">
          {{ item }}
        </split-carousel-item>
      </split-carousel>
    </div>
    <!-- import vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <!-- import component script vue-split-carousel.umd.js from dist dir -->
    <script src="./vue-split-carousel.umd.js"></script>
    <script>
      new Vue({
        data() {
          return {
            list: 6
          };
        }
      }).$mount("#app");
    </script>
  </body>
</html>
```

</details>

# 浏览器兼容性

动画通过 CSS `transition` 实现, 因此只支持 IE10 及以上现代浏览器.

# 组件结构

 `<split-carousel-item>` 在 `<split-carousel>` 内, 自定义元素在 `split-carousel-item` 内.

```html
<split-carousel>
  <split-carousel-item>
    custom content
  </split-carousel-item>
  <split-carousel-item>
    custom content2
  </split-carousel-item>
  ...
</split-carousel>
```

可以通过 `arrorw-left` `arrow-right` 插槽自定义组件按钮。

```html
<split-carousel>
  <h3 slot="left-arrow">left</h3>
  <split-carousel-item>
    custom content
  </split-carousel-item>
  <h3 slot="right-arrow">right</h3>
</split-carousel>
```

# Document

## Split Carousel Attributes

| Attribute         | Description                                                                     | Type    | Accpected Values  | Default |
| ----------------- | ------------------------------------------------------------------------------- | ------- | ----------------- | ------- |
| speed             | 每次轮播动画持续时间                            | Number  | -                 | 500     |
| autoplay          | 是否自动轮播                                  | Boolean | -                 | true    |
| interval          | 轮播间隔                          | Number  | -                 | 3000    |
| loop              | 是否循环轮播                                      | Boolean | -                 | true    |
| initial-index     | 初始轮播项索引，用于定位初始轮播位置                                          | Number  | -                 | 0       |
| display-amount    | 同时展示的轮播项数量                   | Number  | -                 | 4       |
| item-width        | 轮播项宽度                                                   | Number  | -                 | 120     |
| item-align        | 当轮播项少于同时展示数量时的布局     | -       | center/left/right | center  |
| height            | 组件高度                                                             | Number  | -                 | 80      |
| timing-function   | 动画函数，参考 [transition-timing-function][1] | String  | -                 | ease    |
| arrow-area-width  | 左右按钮宽度                                                       | Number  | -                 | 50      |
| arrow-visible     | 按钮是否可见                                                        | -       | enable/always     | enable  |
| hover-cancle-play | 鼠标悬停是否停止轮播                                     | Boolean | -                 | true    |
| play-direction    | 轮播方向                                          | -       | ltr/rtl           | ltr     |

## Split Carousel Slots

| Name        | Descrition         |
| ----------- | ------------------ |
| left-arrow  | 自定义左按钮  |
| right-arrow | 自定义右按钮 |

# Contribution

## Development

```bash
npm i
npm run dev
```

## Build

```bash
npm run build
```

# License

[MIT](./LICENSE)

[1]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
