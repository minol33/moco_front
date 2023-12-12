import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './js/api.js'

const app = createApp(App)
const property = app.config.globalProperties

api(property)

app
    .use(router)
    .mount('#app')
