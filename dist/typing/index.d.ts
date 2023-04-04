import type { App } from 'vue-demi';
import SplitCarousel from './SplitCarousel.vue';
import SplitCarouselItem from './SplitCarouselItem.vue';
interface SplitCarouselOption {
    prefix: string;
}
declare const install: (app: App, option?: SplitCarouselOption) => void;
export { SplitCarousel, SplitCarouselItem };
export default install;
