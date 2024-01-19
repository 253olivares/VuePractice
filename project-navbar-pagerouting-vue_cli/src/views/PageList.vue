<template>
    <h4>Pages</h4>
    <div class="text-end">
        <!-- router link component imported from vue router that allows our application to become a single page app -->
        <!-- we set to directions that our router which listen for and reaction appropriately by display the proper component -->
        <router-link    
            
            to="/pages/create"
            class="btn btn-primary btn-sm"
        >New Page</router-link>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is Published</th>
            </tr>
        </thead>
        <tbody>
            <!-- our tag loops through our pages and displays all our pages in our array. we call our get all pages
            to return our base object set an index for the v-for and then create a click listener for the app that passes the index in the loop -->
            <tr
                v-for="(page,index) in $pages.getAllPages()"
                :key="index"
                @click="goToPage(index)"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.pageContent }}</td>
                <td>{{ page.published ? 'yes': 'no'}}</td>

            </tr>
        </tbody>
    </table>
</template>

<script setup>
//This page utilizes composite API which makes vue more accessible to new developers
// more comfortable with javascript creates a more functional approach vs using an object approach
import {ref, reactive,inject} from 'vue';
import {useRouter, userRouter} from 'vue-router'

//const counter = ref(0); // {value:0}

// instead of making an object each data props and counter are const.
// we just need to call the reactive function to let the code know its meant to be reactive 
const data = reactive({counter: 0});
// calls global pages
const $pages = inject('$pages');
// use router
const router = useRouter();

let click = ()=>{
    data.counter++
}
// methods no longer require to sit in a method objects can just be written as regular functions
//we set our url to set path in function
function goToPage(index){
    router.push({path:`pages/${index}/edit`})
}

</script>

<style scoped>

.table.table-hover tr:hover{
    cursor: pointer;
}

</style>