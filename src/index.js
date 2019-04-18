import SplitCarousel from './split-carousel/index.vue'
import SplitCarouselItem from './split-carousel-item/index.vue'
let install = Vue => {
  Vue.component('split-carousel', SplitCarousel)
  Vue.component('split-carousel-item', SplitCarouselItem)
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export { SplitCarousel, SplitCarouselItem }
export default {
  install
}
