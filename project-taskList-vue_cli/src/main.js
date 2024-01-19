import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//load router into vue using .use

createApp(App).use(router).mount('#app')
