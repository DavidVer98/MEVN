import { createApp } from 'vue'
import App from './App.vue'

import router from './router'  // <--- import router here  (router/index.ts)

createApp(App)
    .use(router)  // <--- use router here
    .mount('#app')

