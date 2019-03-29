import VueSplitCarousel from "./component/main.vue";

let plugin = {
  install: Vue => {
    Vue.component("split-carousel", VueSplitCarousel);
  }
};

export default plugin;
