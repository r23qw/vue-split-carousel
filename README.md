
[中文文档](./README_CN.md)

## Vue Split Carousel

![GitHub](https://img.shields.io/github/license/r23qw/vue-split-carousel.svg)
![](https://img.shields.io/npm/v/vue-split-carousel.svg)

A carousel component for vue, meanwhile display several carousel item.  
Support Vue3, Vue2.7, Vue2, Nuxt2, Nuxt3 , Script tag import, support Typescript.

![example](https://raw.githubusercontent.com/r23qw/file-storage/main/image/vue-split-carousel-example.gif)

## [Playground](https://codesandbox.io/s/elegant-bardeen-n6lg2?file=/src/App.vue) 

## Demo
  See the demo in the examples directory
 | Vue3                                | Vue2.7                                | Vue2                                | Nuxt2                                    | Nuxt3                            | scripts tag import                                                                                                                           |
 | ----------------------------------- | ------------------------------------- | ----------------------------------- | ---------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
 | [Demo](./examples/vue3/src/App.vue) | [Demo](./examples/vue2.7/src/App.vue) | [Demo](./examples/vue2/src/App.vue) | [Demo](./examples/nuxt2/pages/index.vue) | [Demo](./examples/nuxt3/app.vue) | [Vue3 Demo](./examples/scripts/vue3.html) <br/> [Vue2.7 Demo](./examples/scripts/vue2.7.html) <br/> [Vue2 Demo](./examples/scripts/vue2.html) |
## Install

```bash
# npm
npm i vue-split-carousel
# yarn 
yarn add vue-split-carousel
# pnpm 
pnpm add vue-split-carousel
``` 
**Package path depends on the environment, the default is the Vue3 version, the package path for different environments:**  
Vue2 need install [@vue/composition-api](https://github.com/vuejs/composition-api)
 - Vue3: `vue-split-carousel`
 - Vue2.7: `vue-split-carousel/vue2.7`
 - Vue2: `vue-split-carousel/vue2` 
 - Nuxt2: `vue-split-carousel/dist/vue2.7`
 - Nuxt3: `vue-split-carousel`
 - script import: script address is `index.umd.js` file under the corresponding Vue version directory under the dist directory

## Usage

`<split-carousel-item>` is used in `<split-carousel>`, and custom content is placed inside `split-carousel-item`.

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
### Global Component

```js
import Vue from 'vue'
import SplitCarousel from 'vue-split-carousel'
import App from './App.vue'

const app = createApp(App)
app.use(SplitCarousel) // Vue.use(SplitCarousel) in Vue2
app.mount('#app')


```

### Script tag imports

access through `window.VueSplitCarousel` variable, script address is `index.umd.js` file under the corresponding Vue version directory under the dist directory.  
Or use public npm package cdn: 

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

| Attribute       | Description                                                                                                                               | Type          | Accepted value | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------- | ------- |
| speed           | transition duration of carousel item, in milliseconds                                                                                     | Number        | -                | 500     |
| autoplay        | whether automatically switch carousel items                                                                                               | Boolean       | -                | true    |
| interval        | interval of switch carousel items, in milliseconds                                                                                        | Number        | -                | 3000    |
| loop            | whether display carousel items in loop                                                                                                    | Boolean       | -                | true    |
| display-amount  | the amount of carousel items display in carousel container                                                                                | Number        | -                | 4       |
| item-width      | the width of carousel items                                                                                                               | Number        | -                | 120     |
| height          | height of carousel, if the prop value type is number,the unit is `px` by default. you can pass string value to use other unit, eg: `40vh` | Number/String | -                | 80      |
| timing-function | the animation effect of carousel item,reference [transition-timing-function][1]                                                           | String        | -                | ease    |
| pause-on-hover  | whether pause autoplay while mouse hover                                                                                                  | Boolean       | -                | true    |
| arrow-visible   | whether arrow visible, available when `loop` set to `false`                                                                              | String        | default/always   | default |

## Slots

| Name  | Description            |
| ----- | --------------------- |
| left  | customize left arrow  |
| right | customize right arrow |

# License

[MIT](./LICENSE)

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
