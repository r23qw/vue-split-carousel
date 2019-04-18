# Vue Split Carousel

[![Build Status](https://travis-ci.com/Aaron00101010/vue-split-carousel.svg?branch=dev)](https://travis-ci.com/Aaron00101010/vue-split-carousel)

# Install

1. import to page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- import component-style -->
    <link rel="stylesheet" href="./vue-split-carousel.css" />
  </head>
  <body>
    <div id="app" style="width:800px">
      <split-carousel>
        <split-carousel-item v-for="item in list" :key="item">
          {{ item }}
        </split-carousel-item>
      </split-carousel>
    </div>
    <!-- import vue -->
    <script src="./node_modules/vue/dist/vue.js"></script>
    <!-- import component script vue-split-carousel.umd.js -->
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

[transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)
