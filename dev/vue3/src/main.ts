import { createApp } from 'vue'
import App from './App.vue'
import Element from "element-plus"
import 'element-plus/dist/index.css'

let app = createApp(App)

app.use(Element)

app.mount('#app')