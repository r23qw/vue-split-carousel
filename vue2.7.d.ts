import { SplitCarousel, SplitCarouselItem } from './dist/vue2/index';
export * from './dist/vue2.7/index';
export { default } from './dist/vue2.7/index';
declare module '@vue/runtime-core' {
  interface GlobalComponents {
    SplitCarousel: typeof SplitCarousel;
    SplitCarouselItem: typeof SplitCarouselItem;
  }
}
