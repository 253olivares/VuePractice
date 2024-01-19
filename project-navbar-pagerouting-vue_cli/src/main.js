import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routes';
import $pages from './data'
// import all out components app component with all the child elements
// bus contains a global bus that will allow us to call emits and trigger emits from anywhere in the documents as long
// as we call bus. This allows us to skip emit drilling which would be the usual standard.

const app = createApp(App);
// we call our router
app.use(router);

// we call our busses 
// this allows us to use pages which calls upon the user localstorage as a db 
// as well calls upon bus to give us global emits to create custom listeners
// app.config.globalProperties.$bus = $bus;
//app.config.globalProperties.$pages = $pages;
app.provide('$bus', $bus);
app.provide('$pages',$pages);

app.mount('#app');