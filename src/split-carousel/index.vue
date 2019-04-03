<template>
  <div class="split-carousel">
    <!-- left arrow control -->
    <div class="arrow-control left-arrow">
      <div v-if="$slots['left-arrow'] === void 0">
        left
      </div>
      <slot v-else name="left-arrow" />
    </div>
    <div class="content">
      <div
        class="content--container"
        :class="{[`content--container__${itemAlign}`] : isStaticMode}"
        :style="{
          width:`${isStaticMode ? 'auto':`${(itemWidth+itemSpace)*(displayAmount+2)}${cssUnit}`}`,
          marginLeft: `${isStaticMode ? 0 :-(itemWidth+itemSpace)}${cssUnit}`
        }">
        <slot />
      </div>
    </div>
    <!-- right arrow control -->
    <div class="arrow-control right-arrow">
      <div v-if="$slots['right-arrow'] === void 0">
        right
      </div>
      <slot v-else name="right-arrow" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /* play */
    speed: {
      type: Number,
      default: 300
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    startIndex: {
      type: Number,
      default: 0
    },
    /* style unit */
    cssUnit: {
      type: String,
      default: 'px'
    },
    /* item */
    displayAmount: {
      type: Number,
      default: 5
    },
    itemWidth: {
      type: Number,
      default: 120
    },
    itemAlign: {
      validator (value) {
        return ['center', 'left', 'right'].indexOf(value) !== -1
      },
      default: 'center'
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this)
    this.initCarousel()
  },
  data () {
    return {
      itemSpace: 0,
      itemList: [],
      playIndex: this.startIndex,
      containerWidth: 'auto'
    }
  },
  computed: {
    itemAmount () {
      return this.itemList.length
    },
    isStaticMode () {
      return this.itemAmount <= this.displayAmount
    },
    stageIndexList () {
      return []
    }
  },
  watch: {},
  methods: {
    initCarousel () {
      let containerWidth = window.getComputedStyle(this.$el).width
      containerWidth = Number.parseInt(containerWidth)
      let space =
          (containerWidth - this.displayAmount * this.itemWidth) /
          (this.displayAmount - 1)
      if (process.env.NODE_ENV !== 'production') {
        if (space < 0) {
          throw Error(`item space has computed as a negative value:${space},
                       itemWith * displayAmount should less than the width of carousel container,
                       please adjust container width and item width`)
        }
      }
      this.itemSpace = space
    },
    getItems () {
      let list = []
      if (this.$slots.default !== void 0) {
        list = this.$slots.default.filter(item => item.tag !== void 0)
      }
      this.itemList = list
    },
    updateItems () {
      this.getItems()
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
