import Vue from 'vue'
import App from './app.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

new Vue({
  render: h => h(App)
}).$mount('#app')
