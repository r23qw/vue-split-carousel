import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import SplitCarousel from 'vue-split-carousel/vue2';

import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.use(SplitCarousel);

const app = new Vue({
  render: (h) => h(App),
});

app.$mount('#app');
