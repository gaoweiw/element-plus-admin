import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tag from '@/axios/texst'

import { get, post, put, del, test } from '@/axios/request'
const app = createApp(App)

app.use(tag)
app.config.globalProperties.$bbb = tag;

createApp(App).use(store).use(router).mount('#app')
