<template>
  <div class="container">
    <split-carousel :loop="true">
      <template slot="left-arrow">
        <h3>left</h3>
      </template>
      <split-carousel-item
        v-for="item in list"
        :key="item">
        <div class="item">
          {{ item }}
        </div>
      </split-carousel-item>
    </split-carousel>
    <div class="operate">
      <button @click="list++">
        add
      </button>
      <button @click="list--">
        delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      list: 5
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 800px;
    margin: 0 auto;
  }
  .operate {
    padding: 40px 0;
    display: flex;
    justify-content: center;
  }
  .item{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
