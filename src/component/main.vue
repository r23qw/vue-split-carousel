<template>
  <div>
    <h3>
      TEST123
    </h3>
  </div>
</template>

<script>
export default {
  name: "SplitCarousel",
  beforeCreate() {
    let map = new Map();
    map.set('a','1234')
    console.log(map)
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>