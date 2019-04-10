<template>
  <div class="split-carousel" :style="{padding:`0 ${arrowAreaWidth}${cssUnit}`}">
    <!-- left arrow controller -->
    <div @click="setPlayIndex(playIndex-1)"
         class="arrow-control left-arrow">
      <div v-if="$slots['left-arrow'] === void 0">
        left
      </div>
      <slot v-else name="left-arrow" />
    </div>
    <div class="content">
      <div class="content--container"
           :class="{[`content--container__${itemAlign}`] : isStaticMode}"
           :style="{
             'width':`${isStaticMode ? 'auto':`${(itemWidthWithSpace)*(displayAmount+2)}${cssUnit}`}`,
             'margin-left': `${isStaticMode ? 0 :-(itemWidthWithSpace)}${cssUnit}`,
             'height':`${height}${cssUnit}`
           }">
        <slot />
      </div>
    </div>
    <!-- right arrow controller -->
    <div class="arrow-control right-arrow" @click="setPlayIndex(playIndex+1)">
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
      default: 500
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
    height: {
      type: Number,
      default: 80
    },
    /* arrow controller */
    arrowAreaWidth: {
      type: Number,
      default: 50
    },
    /* item */
    displayAmount: {
      type: Number,
      default: 4
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
      itemStageIndexList: [],
      playIndex: this.startIndex,
      containerWidth: 'auto',
      isAnimating: false
    }
  },
  computed: {
    itemAmount () {
      return this.itemList.length
    },
    itemWidthWithSpace () {
      return this.itemWidth + this.itemSpace
    },
    isStaticMode () {
      return this.itemAmount <= this.displayAmount
    }
  },
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
    setPlayIndex (index) {
      let toRight = this.playIndex < index

      if (
        !this.loop &&
        (index < 0 || index > this.itemAmount - this.displayAmount)
      ) {
        return
      }

      if (index < 0) {
        index = this.itemAmount - 1
      }
      if (index >= this.itemAmount) {
        index %= this.itemAmount
      }
      this.isAnimating = toRight ? 'right' : 'left'

      this.playIndex = index
      this.updateStageIndexList()
    },
    updateItems () {
      this.getItems()
      this.updateStageIndexList()
    },
    updateStageIndexList () {
      if (!this.isStaticMode) {
        let indexList = []
        for (let i = 0; i < this.displayAmount + 2; i++) {
          indexList[i] = this.playIndex - 1 + i
          if (indexList[i] < 0) {
            indexList[i] += this.itemAmount
          }
          if (indexList[i] >= this.itemAmount) {
            indexList[i] %= this.itemAmount
          }
        }
        this.itemStageIndexList = indexList
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
