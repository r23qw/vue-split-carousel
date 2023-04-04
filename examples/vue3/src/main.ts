import { createApp } from 'vue'
import App from './App.vue'
import SplitCarousel from 'vue-split-carousel'

const app = createApp(App)
app.use(SplitCarousel)
app.mount('#app')

