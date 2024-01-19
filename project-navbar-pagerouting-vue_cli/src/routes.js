import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/Pages.vue';
import PageList from './views/PageList.vue';
import PageEdit from './views/PageEdit.vue'
// our router where we load in all our components from other pages
// we set directions for these pages based on array index. 

// this does cause a bug where on first load site will display blank 
// additionally creates another bug where wrong page is displayed if the a page in the middle of the array is deleted vs 
// deleting the end.
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // our base route makes index an optional value: Creates the bug where if nothing is passed defaults to null and returns nothing from the array
        {path: '/:index?', component: PageViewer, props: true},
        {
            // pages with child routes to fetch specific page information allowing us to edit or delete or create a new page
            path: '/pages',
            component:Pages,
            children: [ 
                {path: '', component: PageList},
                {path: 'create', component: CreatePage},
                {path: ':index/edit', component: PageEdit, props: true},
            ]},
    ]
});

export default router;