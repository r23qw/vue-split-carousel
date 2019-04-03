import SplitCarousel from './split-carousel/index.vue'
import SplitCarouselItem from './split-carousel-item/index.vue'

export default {
  install: Vue => {
    Vue.component('split-carousel', SplitCarousel)
    Vue.component('split-carousel-item', SplitCarouselItem)
  }
}
