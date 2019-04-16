<template>
  <div
    class="split-carousel"
    :style="{padding:`0 ${arrowAreaWidth}${cssUnit}`}">
    <!-- left arrow controller -->
    <div @click="handleControl('left')"
         class="arrow-control left-arrow">
      <div v-if="$slots['left-arrow'] === void 0">
        left
      </div>
      <slot v-else
            name="left-arrow" />
    </div>
    <!-- carousel container -->
    <div @mouseenter="cancelPlay()"
         @mouseleave="play()"
         class="content">
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
    <div class="arrow-control right-arrow"
         @click="handleControl('right')">
      <div v-if="$slots['right-arrow'] === void 0">
        right
      </div>
      <slot v-else
            name="right-arrow" />
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
    hoverCanclePlay: {
      type: Boolean,
      default: true
    },
    playDirection: {
      default: 'ltr',
      validator (val) {
        return ['rtl', 'ltr'].indexOf(val) !== -1
      }
    },
    interval: {
      type: Number,
      default: 3000
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
    timingFunction: {
      type: String,
      default: 'easein'
    },
    displayAmount: {
      type: Number,
      default: 1
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
    this.initCarousel()
    setTimeout(() => {
      this.isInit = true
      if (this.autoplay) {
        this.play()
      }
    }, 16)
  },
  destroyed () {
    this.cancelPlay()
    clearTimeout(this.timer)
  },
  data () {
    return {
      itemSpace: 0,
      itemList: [],
      itemStageIndexList: [],
      index: this.startIndex,
      containerWidth: 'auto',
      isReseting: false,
      isInProcess: false,
      isInit: false,
      timer: null,
      autoplayTimer: null
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
    },
    isNeedReset () {
      return (
        this.itemAmount > this.displayAmount &&
          this.itemAmount === this.displayAmount + 1
      )
    }
  },
  watch: {
    autoplay () {
      if (this.autoplay) {
        this.play()
      } else {
        this.cancelPlay()
      }
    }
  },
  methods: {
    initCarousel () {
      let containerWidth = window.getComputedStyle(this.$el).width
      containerWidth = Number.parseInt(containerWidth)
      let space =
          (containerWidth - this.displayAmount * this.itemWidth) /
          (this.displayAmount - 1)
      if (Math.abs(containerWidth - this.itemWidth) < 1) {
        space = 0
      }
      if (process.env.NODE_ENV !== 'production') {
        if (space < 0) {
          throw Error(`
              item space has computed as a negative value:${space},
              itemWith * displayAmount should less than the width of carousel container,
              please adjust container width and item width
            `)
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
    setIndex (index) {
      if (this.isReseting || this.isInProcess) return
      let toRight = index > this.index
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

      this.index = index
      this.updateStageIndexList(toRight)
    },
    updateItems () {
      this.getItems()
      this.updateStageIndexList()
    },
    /* caculate order of carousel items */
    updateStageIndexList (toRight) {
      if (!this.isStaticMode) {
        let indexList = []
        for (let i = 0; i < this.displayAmount + 2; i++) {
          indexList[i] = this.index - 1 + i
          if (indexList[i] < 0) {
            indexList[i] += this.itemAmount
          }
          if (indexList[i] >= this.itemAmount) {
            indexList[i] %= this.itemAmount
          }
        }
        /*
            when item amount equal display amount plus 1,
            to ensure animation visual effects,
            need to reset edge item position by carousel's next move direction
          */
        if (this.isNeedReset && this.isInit) {
          clearTimeout(this.timer)
          this.isReseting = true
          this.isInProcess = true
          if (toRight) {
            this.itemStageIndexList.splice(0, 1, -1)
            this.timer = setTimeout(() => {
              this.itemStageIndexList = indexList
              this.isReseting = false
              this.isInProcess = false
            }, 16)
          } else {
            let cloneList = indexList.slice()
            cloneList[0] = -1
            this.itemStageIndexList = cloneList
            this.isReseting = false
            this.timer = setTimeout(() => {
              this.isReseting = true
              this.itemStageIndexList = indexList
              this.timer = setTimeout(() => {
                this.isReseting = false
                this.isInProcess = false
              }, 16)
            }, this.speed)
          }
        } else {
          if (this.isInit) {
            this.$emit('change', this.index)
          }
          this.itemStageIndexList = indexList
        }
      }
    },
    play () {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = setTimeout(() => {
        if (this.playDirection !== 'rtl') {
          this.setIndex(this.index + 1)
        } else {
          this.setIndex(this.index - 1)
        }
        this.play()
      }, this.interval)
    },
    cancelPlay () {
      clearTimeout(this.autoplayTimer)
    },
    handleControl (direction) {
      if (direction === 'right') {
        this.setIndex(this.index + 1)
      } else {
        this.setIndex(this.index - 1)
      }

      if (this.autoplay) {
        this.cancelPlay()
        this.autoplayTimer = setTimeout(() => {
          if (this.autoplay) {
            this.play()
          }
        }, this.interval)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
