import { App } from "vue";
import SplitCarousel from "./components/SplitCarousel.vue";
import SplitCarouselItem from "./components/SplitCarouselItem.vue";

interface SplitCarouselOption {
  prefix: string;
}

const install = (app: App, option?: SplitCarouselOption): void => {
  const prefix = option?.prefix || "";
  app.component(`${prefix}SplitCarousel`, SplitCarousel);
  app.component(`${prefix}SplitCarouselItem`, SplitCarouselItem);
};

export default { SplitCarousel, SplitCarouselItem, install };
