import { createApp } from 'vue'
import './style.css'
import 'uno.css'
import VueTilt from 'vue3-tilt'
import App from './App.vue'

const app = createApp(App)
app.use(VueTilt)
app.mount('#app')
