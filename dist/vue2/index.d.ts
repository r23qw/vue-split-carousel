import type { Plugin } from 'vue-demi';
import SplitCarousel from './SplitCarousel.vue';
import SplitCarouselItem from './SplitCarouselItem.vue';
declare const install: Plugin;
export { SplitCarousel, SplitCarouselItem, install };
export default install;
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        SplitCarousel: typeof SplitCarousel;
        SplitCarouselItem: typeof SplitCarouselItem;
    }
}
