import VueSplitCarousel from "./component/main.vue";

export let install = Vue => {
  Vue.Component("vue-split-carousel", VueSplitCarousel);
};

export default install
