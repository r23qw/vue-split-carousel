
## Vue Split Carousel

![GitHub](https://img.shields.io/github/license/aaron00101010/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)

A carousel component for vue,meanwhile display several carousel item.

![show](https://raw.githubusercontent.com/Aaron00101010/vue-split-carousel/30dec58c513814a306ddd0fba08096ad291e4a7d/examples/GIF.gif)  

[中文文档](./README_CN.md)

> 2.x as lastest version only support vue 3, vue 2 should use 1.x version. 

### [1.x version doc](https://github.com/Aaron00101010/vue-split-carousel/tree/1.x)

<br/>

## [Playground](https://codesandbox.io/s/elegant-bardeen-n6lg2?file=/src/App.vue)  

## Browser Compatibility

Mordern Browser, follow vue 3 compatibility.

```
> 1%
last 2 versions
not ie 11
not dead
```

## Component Structure

Use `<split-carousel-item>` in `<split-carousel>`,put your custom content in `split-carousel-item`.

```html
<split-carousel>
  <split-carousel-item>
    custom content
  </split-carousel-item>
  <split-carousel-item>
    custom content2
  </split-carousel-item>
</split-carousel>
```

## Install

```bash
npm i vue-split-carousel -S
```
support prefix option prevent name conflict while install component with `app.use`
### Local Component

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
```

</details>

### Global Component

```js
import Vue from "vue";
import App from "./App.vue";
import SplitCarousel from "vue-split-carousel";

const app = createApp(App);
app.use(SplitCarousel,{prefix:'El'});
app.mount("#app");

```

### import by `<script>`

can use vue-split-carousel.min.umd.js in the dist floder.


```html
<div id="app"></div>
<script src="https://unpkg.com/vue@next"></script>
<script src="./vue-split-carousel.umd.min.js"></script>
<script>
  const app = Vue.createApp({
    template:`
      <split-carousel>
        <split-carousel-item v-for="i in 8">{{i}}</split-carousel-item>
      </split-carousel>
    `
  })
  app.use(window['vue-split-carousel'])
  app.mount('#app')
</script>
```

## Props

| Attribute       | Description                                                                     | Type    | Accpected Values | Default |
| --------------- | ------------------------------------------------------------------------------- | ------- | ---------------- | ------- |
| speed           | transition duration of carousel item, in milliseconds                           | Number  | -                | 500     |
| autoplay        | whether automatically switch carousel items                                     | Boolean | -                | true    |
| interval        | interval of switch carousel items, in milliseconds                              | Number  | -                | 3000    |
| loop            | whether display carousel items in loop                                          | Boolean | -                | true    |
| display-amount  | the amount of carousel items display in carousel container                      | Number  | -                | 4       |
| item-width      | the width of carousel items                                                     | Number  | -                | 120     |
| height          | height of carousel                                                              | Number  | -                | 80      |
| timing-function | the animation effect of carousel item,reference [transition-timing-function][1] | String  | -                | ease    |
| pause-on-hover  | whether pause autoplay while mouse hover                                        | Boolean | -                | true    |
| arrow-visible   | whether arrow visiable, avaliable when `loop` set to `false`                    | String  | default/always   | default |

## Slots

| Name  | Descrition            |
| ----- | --------------------- |
| left  | customize left arrow  |
| right | customize right arrow |

# License

[MIT](./LICENSE)

[1]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
