import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store';
// main js loads our app and our state manger called store
const app = createApp(App);

app.use(store);

app.mount('#app');
