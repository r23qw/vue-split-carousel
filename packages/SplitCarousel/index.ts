import type { Plugin } from 'vue-demi';
import SplitCarousel from './SplitCarousel.vue';
import SplitCarouselItem from './SplitCarouselItem.vue';

interface SplitCarouselOption {
  prefix: string;
}

const install: Plugin = (app, option?: SplitCarouselOption): void => {
  const prefix = option?.prefix || '';
  app.component(`${prefix}SplitCarousel`, SplitCarousel as any);
  app.component(`${prefix}SplitCarouselItem`, SplitCarouselItem as any);
};

export { SplitCarousel, SplitCarouselItem, install };
export default install;

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SplitCarousel: typeof SplitCarousel;
    SplitCarouselItem: typeof SplitCarouselItem;
  }
}
