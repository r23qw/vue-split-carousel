import SplitCarousel from './split-carousel/main.vue'
import SplitCarouselItem from './split-carousel-item/main.vue'

let plugin = {
  install: Vue => {
    Vue.component('split-carousel', SplitCarousel)
    Vue.component('split-carousel-item', SplitCarouselItem)
  }
}

export default plugin
