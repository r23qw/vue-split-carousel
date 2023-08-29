
## Vue Split Carousel

![GitHub](https://img.shields.io/github/license/r23qw/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)

一个支持同时展示多个轮播项的轮播组件。

支持 Vue3, Vue2.7, Vue2, Nuxt2, Nuxt3 , Script 标签, 支持 Typescript。

![example](https://raw.githubusercontent.com/r23qw/file-storage/main/image/vue-split-carousel-example.gif)

## [Playground](https://codesandbox.io/s/elegant-bardeen-n6lg2?file=/src/App.vue) 

## Demo
 参照 examples 目录下的 demo
 | Vue3                                | Vue2.7                                | Vue2                                | Nuxt2                                    | Nuxt3                            | scripts 引入                                                                                                                                  |
 | ----------------------------------- | ------------------------------------- | ----------------------------------- | ---------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
 | [Demo](./examples/vue3/src/App.vue) | [Demo](./examples/vue2.7/src/App.vue) | [Demo](./examples/vue2/src/App.vue) | [Demo](./examples/nuxt2/pages/index.vue) | [Demo](./examples/nuxt3/app.vue) | [Vue3 Demo](./examples/scripts/vue3.html) <br/> [Vue2.7 Demo](./examples/scripts/vue2.7.html) <br/> [Vue2 Demo](./examples/scripts/vue2.html) |
## 安装

```bash
# npm
npm i vue-split-carousel
# yarn 
yarn add vue-split-carousel
# pnpm 
pnpm add vue-split-carousel
```
**包路径根据不同环境而定，默认为 Vue3 版本, 不同环境下包路径：**  
Vue2 版本依赖 [@vue/composition-api](https://github.com/vuejs/composition-api)
 - Vue3: `vue-split-carousel`
 - Vue2.7: `vue-split-carousel/vue2.7`
 - Vue2: `vue-split-carousel/vue2` 
 - Nuxt2: `vue-split-carousel/dist/vue2.7`
 - Nuxt3: `vue-split-carousel`
 - script 标签引入: `dist` 目录下对应 vue 版本下的 `index.umd.js`

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
  // Vue3 && Nuxt3
  import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel"; 
  // Vue2.7
  // import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel/vue2.7"; 
  // Vue2
  // import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel/vue2"; 
  // Nuxt2
  // import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel/dist/vue2.7"; 
  export default {
    components: {
      SplitCarousel,
      SplitCarouselItem
    }
  };
</script>
```
### 全局组件

```js
import Vue from 'vue'
import SplitCarousel from 'vue-split-carousel'
import App from './App.vue'

const app = createApp(App)
app.use(SplitCarousel) // Vue.use(SplitCarousel) in Vue2
app.mount('#app')
```
### 通过 `<script>` 标签引入 

通过 `window.VueSplitCarousel` 变量访问, 脚本地址为 dist 目录下对应 Vue 版本目录下的的 `index.umd.js` 文件。  
也可以通过的 npm CDN 服务引入: 

```html
<!-- vue3 -->
<script src="https://unpkg.com/vue-split-carousel@3.0.1/dist/vue3/index.umd.js"></script>
<!-- vue2.7 -->
<script src="https://unpkg.com/vue-split-carousel@3.0.1/dist/vue2.7/index.umd.js"></script>
<!-- vue2 -->
<script src="https://unpkg.com/vue-split-carousel@3.0.1/dist/vue2/index.umd.js"></script>
```

```html
<div id="app"></div>
<script src="https://unpkg.com/vue@3"></script>
<script src="./index.umd.js"></script>
<script>
  const app = Vue.createApp({
    template:`
      <split-carousel>
        <split-carousel-item v-for="i in 8">{{i}}</split-carousel-item>
      </split-carousel>
    `
  })
  app.use(window.VueSplitCarousel)
  app.mount('#app')
</script>
```

## Props

| Attribute       | Description                                                                       | Type          | Accpected Values | Default |
| --------------- | --------------------------------------------------------------------------------- | ------------- | ---------------- | ------- |
| speed           | 过渡动画时长                                                                      | Number        | -                | 500     |
| autoplay        | 是否自动播放                                                                      | Boolean       | -                | true    |
| interval        | 自动播放时间间隔                                                                  | Number        | -                | 3000    |
| loop            | 是否循环轮播                                                                      | Boolean       | -                | true    |
| display-amount  | 展示轮播子项数量                                                                  | Number        | -                | 4       |
| item-width      | 轮播子项宽度                                                                      | Number        | -                | 120     |
| height          | 轮播组件高度, 传入Number值则默认单位为px,使用其他单位可以传入字符串值，如：`40vh` | Number/String | -                | 80      |
| timing-function | 过渡动画函数 [transition-timing-function][1]                                      | String        | -                | ease    |
| pause-on-hover  | 鼠标悬浮是否停止自动播放                                                          | Boolean       | -                | true    |
| arrow-visible   | 是否显示箭头，当 `loop` 设置为 `false` 有效                                       | String        | default/always   | default |

## Slots

|  名称  | 描述   |
| ----- | ------------ |
| left  | 自定义左箭头 |
| right | 自定义右箭头 |

## 浏览器兼容性

- Vue2 : follow Vue2, but Internet Explorer required 10+
- Vue3 : follow Vue3
# License

[MIT](./LICENSE)

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
