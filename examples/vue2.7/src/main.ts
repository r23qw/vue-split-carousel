import Vue from 'vue';
import App from './App.vue';
import SplitCarousel from 'vue-split-carousel/vue2.7';
import './assets/main.css';

Vue.use(SplitCarousel);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
