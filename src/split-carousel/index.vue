<template>
  <div
    class="split-carousel"
    :style="{padding:`0 ${arrowAreaWidth}${cssUnit}`}">
    <!-- left arrow controller -->
    <div
      v-show="isLeftArrowEnable"
      @click="handleControl('left')"
      class="split-carousel--arrow split-carousel--arrow__left">
      <div
        class="split-carousel--arrow--left"
        v-if="$slots['left-arrow'] === void 0" />
      <slot
        v-else
        name="left-arrow" />
    </div>
    <!-- carousel container -->
    <div
      @mouseenter="hoverCancelPlay&&cancelPlay()"
      @mouseleave="hoverCancelPlay&&play()"
      class="split-carousel--content">
      <div
        class="split-carousel--content--container"
        :class="{[`split-carousel--content--container__${itemAlign}`] : isStaticMode}"
        :style="{
          'width':`${isStaticMode ? 'auto':`${(itemWidthWithSpace)*(displayAmount+2)}${cssUnit}`}`,
          'margin-left': `${isStaticMode ? 0 :-(itemWidthWithSpace)}${cssUnit}`,
          'height':`${height}${cssUnit}`
        }">
        <slot />
      </div>
    </div>
    <!-- right arrow controller -->
    <div
      v-show="isRightArrowEnable"
      class="split-carousel--arrow split-carousel--arrow__right"
      @click="handleControl('right')">
      <div
        class="split-carousel--arrow--right"
        v-if="$slots['right-arrow'] === void 0" />
      <slot
        v-else
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
    hoverCancelPlay: {
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
    initialIndex: {
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
    arrowVisible: {
      type: String,
      default: 'enable',
      validator (value) {
        return ['enable', 'always'].indexOf(value) !== -1
      }
    },
    /* item */
    timingFunction: {
      type: String,
      default: 'ease'
    },
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
    this.initCarousel()
    setTimeout(() => {
      this.isInit = true
      if (this.autoplay) {
        this.play()
      }
    }, 16)
    /* fix animation effect while broswer tabs switch(broswer would stop to painting while the page is hidden) */
    document.addEventListener(
      'visibilitychange',
      this.handlePageVisiblityChange
    )
  },
  destroyed () {
    this.cancelPlay()
    clearTimeout(this.timer)
    document.removeEventListener(
      'visibilitychange',
      this.handlePageVisiblityChange
    )
  },
  data () {
    return {
      itemSpace: 0,
      itemList: [],
      itemStageIndexList: [],
      index: this.initialIndex,
      containerWidth: 'auto',
      isReseting: false,
      isUnavailable: false,
      isInit: false,
      timer: null,
      autoplayTimer: null,
      isPageVisible: true
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
    },
    isLeftArrowEnable () {
      let res = true
      if (this.arrowVisible === 'enable') {
        if (this.isStaticMode) {
          res = false
        } else if (this.loop === false && this.index <= 0) {
          res = false
        }
      }
      return res
    },
    isRightArrowEnable () {
      let res = true
      if (this.arrowVisible === 'enable') {
        if (this.isStaticMode) {
          res = false
        } else if (this.loop === false && this.index >= this.itemAmount - this.displayAmount) {
          res = false
        }
      }

      return res
    }
  },
  watch: {
    autoplay () {
      if (this.autoplay) {
        this.play()
      } else {
        this.cancelPlay()
      }
    },
    displayAmount () {
      this.initCarousel()
    },
    itemWidth () {
      this.initCarousel()
    },
    arrowAreaWidth () {
      this.initCarousel()
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
      if (this.isReseting || this.isUnavailable) return
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
          this.isUnavailable = true
          if (toRight) {
            this.itemStageIndexList.splice(0, 1, -1)
            this.timer = setTimeout(() => {
              this.itemStageIndexList = indexList
              this.isReseting = false
              this.isUnavailable = false
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
                this.isUnavailable = false
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
        if (this.playDirection !== 'ltr') {
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
        this.setIndex(this.index - 1)
      } else {
        this.setIndex(this.index + 1)
      }

      if (this.autoplay) {
        this.cancelPlay()
        this.autoplayTimer = setTimeout(() => {
          if (this.autoplay) {
            this.play()
          }
        }, this.interval)
      }
    },
    handlePageVisiblityChange () {
      if (document.visibilityState === 'hidden') {
        this.isPageVisible = false
      }
      if (document.visibilityState === 'visible') {
        setTimeout(() => {
          this.isPageVisible = true
        })
      }
    }
  }
}
</script>

<style>
.split-carousel {
  font-size: 0;
  position: relative;
  overflow: hidden;
}
.split-carousel--content {
  width: 100%;
  padding: 1px;
  overflow: hidden;
}
.split-carousel--content--container {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-duration: 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
}
.split-carousel--content--container__left {
  text-align: left;
}
.split-carousel--content--container__center {
  text-align: center;
}
.split-carousel--content--container__right {
  text-align: right;
}
.split-carousel--arrow {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.split-carousel--arrow__left {
  left: 0;
}
.split-carousel--arrow__right {
  right: 0;
}
.split-carousel--arrow--left,
.split-carousel--arrow--right {
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #dcdfe6;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: 35% 35%;
  transition: border-color, background-color 0.15s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.split-carousel--arrow--left {
  background-position: 8px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMTA5LjMyNiAyMjYuODA0TDMyOC4yNzQgNy44NkMzMzMuMzM4IDIuNzkyIDM0MC4wOTggMCAzNDcuMzA2IDBzMTMuOTY4IDIuNzkyIDE5LjAzMiA3Ljg2bDE2LjEyNCAxNi4xMmMxMC40OTIgMTAuNTA0IDEwLjQ5MiAyNy41NzYgMCAzOC4wNjRMMTk4LjYwNiAyNDUuOWwxODQuMDYgMTg0LjA2YzUuMDY0IDUuMDY4IDcuODYgMTEuODI0IDcuODYgMTkuMDI4IDAgNy4yMTItMi43OTYgMTMuOTY4LTcuODYgMTkuMDRsLTE2LjEyNCAxNi4xMTZjLTUuMDY4IDUuMDY4LTExLjgyNCA3Ljg2LTE5LjAzMiA3Ljg2cy0xMy45NjgtMi43OTItMTkuMDMyLTcuODZMMTA5LjMyNiAyNjVjLTUuMDc2LTUuMDg0LTcuODY0LTExLjg3Mi03Ljg0OC0xOS4wODgtLjAxNi03LjI0NCAyLjc3Mi0xNC4wMjggNy44NDgtMTkuMTA4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIyM2MDYyNiIgZmlsbD0iIzYwNjI2NiIvPjwvc3ZnPg==");
}
.split-carousel--arrow--right {
  background-position: 10px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMzgyLjY3OCAyMjYuODA0TDE2My43MyA3Ljg2QzE1OC42NjYgMi43OTIgMTUxLjkwNiAwIDE0NC42OTggMHMtMTMuOTY4IDIuNzkyLTE5LjAzMiA3Ljg2bC0xNi4xMjQgMTYuMTJjLTEwLjQ5MiAxMC41MDQtMTAuNDkyIDI3LjU3NiAwIDM4LjA2NEwyOTMuMzk4IDI0NS45bC0xODQuMDYgMTg0LjA2Yy01LjA2NCA1LjA2OC03Ljg2IDExLjgyNC03Ljg2IDE5LjAyOCAwIDcuMjEyIDIuNzk2IDEzLjk2OCA3Ljg2IDE5LjA0bDE2LjEyNCAxNi4xMTZjNS4wNjggNS4wNjggMTEuODI0IDcuODYgMTkuMDMyIDcuODZzMTMuOTY4LTIuNzkyIDE5LjAzMi03Ljg2TDM4Mi42NzggMjY1YzUuMDc2LTUuMDg0IDcuODY0LTExLjg3MiA3Ljg0OC0xOS4wODguMDE2LTcuMjQ0LTIuNzcyLTE0LjAyOC03Ljg0OC0xOS4xMDh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjIzYwNjI2IiBmaWxsPSIjNjA2MjY2Ii8+PC9zdmc+");
}
.split-carousel--arrow--left:hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMTA5LjMyNiAyMjYuODA0TDMyOC4yNzQgNy44NkMzMzMuMzM4IDIuNzkyIDM0MC4wOTggMCAzNDcuMzA2IDBzMTMuOTY4IDIuNzkyIDE5LjAzMiA3Ljg2bDE2LjEyNCAxNi4xMmMxMC40OTIgMTAuNTA0IDEwLjQ5MiAyNy41NzYgMCAzOC4wNjRMMTk4LjYwNiAyNDUuOWwxODQuMDYgMTg0LjA2YzUuMDY0IDUuMDY4IDcuODYgMTEuODI0IDcuODYgMTkuMDI4IDAgNy4yMTItMi43OTYgMTMuOTY4LTcuODYgMTkuMDRsLTE2LjEyNCAxNi4xMTZjLTUuMDY4IDUuMDY4LTExLjgyNCA3Ljg2LTE5LjAzMiA3Ljg2cy0xMy45NjgtMi43OTItMTkuMDMyLTcuODZMMTA5LjMyNiAyNjVjLTUuMDc2LTUuMDg0LTcuODY0LTExLjg3Mi03Ljg0OC0xOS4wODgtLjAxNi03LjI0NCAyLjc3Mi0xNC4wMjggNy44NDgtMTkuMTA4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzQwOWVmZiIgZmlsbD0iIzQwOWVmZiIvPjwvc3ZnPg==");
}
.split-carousel--arrow--right:hover {
  border-color: #c6e2ff;
  background-color: #ecf5ff;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTIuMDA0IDQ5Mi4wMDQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNMzgyLjY3OCAyMjYuODA0TDE2My43MyA3Ljg2QzE1OC42NjYgMi43OTIgMTUxLjkwNiAwIDE0NC42OTggMHMtMTMuOTY4IDIuNzkyLTE5LjAzMiA3Ljg2bC0xNi4xMjQgMTYuMTJjLTEwLjQ5MiAxMC41MDQtMTAuNDkyIDI3LjU3NiAwIDM4LjA2NEwyOTMuMzk4IDI0NS45bC0xODQuMDYgMTg0LjA2Yy01LjA2NCA1LjA2OC03Ljg2IDExLjgyNC03Ljg2IDE5LjAyOCAwIDcuMjEyIDIuNzk2IDEzLjk2OCA3Ljg2IDE5LjA0bDE2LjEyNCAxNi4xMTZjNS4wNjggNS4wNjggMTEuODI0IDcuODYgMTkuMDMyIDcuODZzMTMuOTY4LTIuNzkyIDE5LjAzMi03Ljg2TDM4Mi42NzggMjY1YzUuMDc2LTUuMDg0IDcuODY0LTExLjg3MiA3Ljg0OC0xOS4wODguMDE2LTcuMjQ0LTIuNzcyLTE0LjAyOC03Ljg0OC0xOS4xMDh6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjNDA5ZWZmIiBmaWxsPSIjNDA5ZWZmIi8+PC9zdmc+");
}
</style>
