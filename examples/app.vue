<template>
  <div class="container">
    <split-carousel :loop="true"
                    :autoplay="autoplay"
                    play-direction="ltr"
                    :display-amount="4"
                    @change="handleChange">
      <template slot="left-arrow">
        <h3>left</h3>
      </template>
      <split-carousel-item v-for="item in list" :key="item">
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
      <button @click="autoplay = !autoplay">
        autoplay
      </button>
    </div>
  </div>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      list: 5,
      autoplay: false
    }
  },
  methods: {
    handleChange () {
      console.log(arguments)
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
    box-sizing: border-box;
    border: 1px seagreen solid;
    height: 100%;
  }
</style>
