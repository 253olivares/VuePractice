// importing required 
import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

// our router js that creates our router in vue js 
//router is loaded in as a component using create router and create web history

// constant is created with an array with information about our router and components they are to load when the hash shows corresponding correction
const routes = [
    {
        // when the browser url has / at the end followed by nothing display home component
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

// We create the router here that is then loaded into app vue and plugged into the framework to be used using router vue and link components
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router