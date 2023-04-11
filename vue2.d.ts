import install, { SplitCarousel, SplitCarouselItem } from './dist/vue2/index';
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    SplitCarousel: typeof SplitCarousel;
    SplitCarouselItem: typeof SplitCarouselItem;
  }
}

export default install as (Vue: VueConstructor) => void;
export * from './dist/vue2/index';
