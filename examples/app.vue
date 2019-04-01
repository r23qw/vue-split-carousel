<template>
  <div class="container">
    <template name="left-arrow">
      1
    </template>
    <split-carousel>
      <split-carousel-item v-for="item in list"
                           :key="item">
        <img src="https://placehold.it/200x100"
             alt="item">
      </split-carousel-item>
    </split-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 800px;
  margin: 0 auto;
}
</style>
