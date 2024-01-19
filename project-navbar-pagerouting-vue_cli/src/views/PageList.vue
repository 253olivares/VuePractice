<template>
    <h4>Pages</h4>
    <div class="text-end">
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
//composite API more functional approach vs using an object approach
import {ref, reactive,inject} from 'vue';
import {useRouter, userRouter} from 'vue-router'

//const counter = ref(0); // {value:0}

const data = reactive({counter: 0});
const $pages = inject('$pages');
const router = useRouter();

let click = ()=>{
    data.counter++
}

function goToPage(index){
    router.push({path:`pages/${index}/edit`})
}

</script>

<style scoped>

.table.table-hover tr:hover{
    cursor: pointer;
}

</style>