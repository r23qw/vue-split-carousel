
## Vue Split Carousel

![GitHub](https://img.shields.io/github/license/aaron00101010/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)

A carousel component for vue,meanwhile display several carousel item.

![show](https://raw.githubusercontent.com/Aaron00101010/vue-split-carousel/30dec58c513814a306ddd0fba08096ad291e4a7d/examples/GIF.gif)  

  
> 2.x 版本仅支持 Vue 3, Vue 2 使用 1.x 版本. 

### [1.x 版本文档](https://github.com/Aaron00101010/vue-split-carousel/tree/1.x)

<br/>

## [Playground/Demo](https://codesandbox.io/s/elegant-bardeen-n6lg2?file=/src/App.vue)  

## 浏览器兼容性

现代浏览器，跟随 Vue 3 兼容性

```
> 1%
last 2 versions
not ie 11
not dead
```

## 组件结构

 `<split-carousel-item>` 在 `<split-carousel>` 内使用, 自定义内容放置在 `split-carousel-item` 内.

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

## 安装

```bash
npm i vue-split-carousel -S
```
当使用 `app.use` 安装组件时，支持 `prefix` 配置用于避免组件名冲突

### 局部组件

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

### 全局组件

```js
import Vue from "vue";
import App from "./App.vue";
import SplitCarousel from "vue-split-carousel";

const app = createApp(App);
app.use(SplitCarousel,{prefix:'El'});
app.mount("#app");

```

### 通过 `<script>` 标签引入

可以使用 dist 文件夹下的 vue-split-carousel.min.umd.js 安装 

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

| Attribute       | Description                                  | Type    | Accpected Values | Default |
| --------------- | -------------------------------------------- | ------- | ---------------- | ------- |
| speed           | 过渡动画时长                                 | Number  | -                | 500     |
| autoplay        | 是否自动播放                                 | Boolean | -                | true    |
| interval        | 自动播放时间间隔                             | Number  | -                | 3000    |
| loop            | 是否循环轮播                                 | Boolean | -                | true    |
| display-amount  | 展示轮播子项数量                             | Number  | -                | 4       |
| item-width      | 轮播子项宽度                                 | Number  | -                | 120     |
| height          | 轮播组件高度                                 | Number  | -                | 80      |
| timing-function | 过渡动画函数 [transition-timing-function][1] | String  | -                | ease    |
| pause-on-hover  | 鼠标悬浮是否停止自动播放                     | Boolean | -                | true    |
| arrow-visible   | 是否显示箭头，当 `loop` 设置为 `false` 有效  | String  | default/always   | default |

## Slots

| Name  | Descrition   |
| ----- | ------------ |
| left  | 自定义左箭头 |
| right | 自定义右箭头 |

# License

[MIT](./LICENSE)

[1]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
