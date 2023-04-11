import { createApp } from 'vue'
import './style.css'
import 'uno.css'
import App from './App.vue'
import VueTilt from 'vue3-tilt'

const app = createApp(App)
app.use(VueTilt)
app.mount('#app')
