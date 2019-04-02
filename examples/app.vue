<template>
  <div class="container">
    <split-carousel item-align="right">
      <template slot="left-arrow">
        <h3>left</h3>
      </template>
      <split-carousel-item v-for="item in list" :key="item">
        {{ item }}
      </split-carousel-item>
    </split-carousel>
    <div class="operate">
      <button @click="list.push(list.length+1)">
        add
      </button>
      <button @click="list.pop()">
        delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created () {

  },
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6]
      // list: []
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 800px;
  margin: 0 auto;
}
.operate{
  padding: 40px 0;
  display: flex;
  justify-content: center;
}
</style>
