# Vue Split Carousel

[![Build Status](https://travis-ci.com/Aaron00101010/vue-split-carousel.svg?branch=master)](https://travis-ci.com/Aaron00101010/vue-split-carousel)
![](https://img.shields.io/npm/l/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)
![](https://img.shields.io/bundlephobia/minzip/vue-split-carousel.svg)
<br>
<br>
a carousel component for vue, display several carousel-item in carousel container.  
SSR supported, compatible IE 10+ and modern browsers
<br>
<br>
![show](./examples/GIF.gif)  

### [Playground](https://aaron00101010.github.io/vue-split-carousel/)  

# Install

## import by npm

### install package

```bash
npm i vue-split-carousel -S
```

### Local Usage

<details>

<summary><strong>example code</strong></summary>

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

### Global Usage

<details>

<summary><strong>example code</strong></summary>

```js
import Vue from "vue";
import App from "./App.vue";

import SplitCarousel from "vue-split-carousel";
Vue.use(SplitCarousel);

new Vue({
  render: h => h(App)
}).$mount("#app");
```

</details>

## import by `<script>`

1. import component style from dist dir
2. import vue.js
3. import vue-split-carousel.umd.js

<details>

<summary><strong>example code</strong></summary>

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

# Browser Compatibility

animation effect is implent by CSS property `transition`, thus only support for IE 10+ and other modern browsers.

# Component Structure

Use `<split-carousel-item>` in `<split-carousel>`,put your custom content in `split-carousel-item`.

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

You can customize carousel arrow by slots `arrow-left` and `arrow-right`

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
| speed             | duration of carousel item animation,in milliseconds                             | Number  | -                 | 500     |
| autoplay          | whether automatically switch carousel items                                     | Boolean | -                 | true    |
| interval          | interval of switch carousel items, in milliseconds                              | Number  | -                 | 3000    |
| loop              | whether display carousel items in loop                                          | Boolean | -                 | true    |
| initial-index     | index of initally first carousel item                                           | Number  | -                 | 0       |
| display-amount    | the amount of carousel items display in carousel container                      | Number  | -                 | 4       |
| item-width        | the width of carousel items                                                     | Number  | -                 | 120     |
| item-align        | carousel item alignment while carousel item amount less than display amount     | -       | center/left/right | center  |
| height            | height of carousel                                                              | Number  | -                 | 80      |
| timing-function   | the animation effect of carousel item,reference [transition-timing-function][1] | String  | -                 | ease    |
| arrow-area-width  | the width of arrow area                                                         | Number  | -                 | 50      |
| arrow-visible     | when arrows are show                                                            | -       | enable/always     | enable  |
| hover-cancle-play | whether stop auto play while mouse hover                                        | Boolean | -                 | true    |
| play-direction    | the moving direction of carousel item                                           | -       | ltr/rtl           | ltr     |

## Split Carousel Slots

| Name        | Descrition         |
| ----------- | ------------------ |
| left-arrow  | customize left arrow  |
| right-arrow | customize right arrow |

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
