import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import api from './js/api.js'
import common from './js/common.js'

const app = createApp(App)
const property = app.config.globalProperties

api(property)
common(property)

app
    .use(router)
    .use(Notifications)
    .mount('#app')
