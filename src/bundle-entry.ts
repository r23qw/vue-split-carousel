import SplitCarousel from "./components/SplitCarousel.vue";
import SplitCarouselItem from "./components/SplitCarouselItem.vue";
import { App } from "vue";

interface SplitCarouselOption {
  prefix: string;
}

const install = (app: App, option?: SplitCarouselOption): void => {
  const prefix = option?.prefix || "";
  app.component(`${prefix}SplitCarousel`, SplitCarousel);
  app.component(`${prefix}SplitCarouselItem`, SplitCarouselItem);
};

export { SplitCarousel, SplitCarouselItem, install };
