import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.performance = true
app.use(ElementPlus)
app.mount('#app')
