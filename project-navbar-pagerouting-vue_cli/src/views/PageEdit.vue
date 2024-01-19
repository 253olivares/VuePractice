<template>
    <h4>Edit {{ page.pageTitle }}</h4>

    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-mb-8">
                <div class="mb-3">
                    <label for="" class="form-label">Page Title</label>
                    <input id="name" type="text" class="form-control" v-model="title2" />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Page Content</label>
                    <textarea  id="content" type="text" class="form-control" rows="5" v-model="content2"></textarea>
                </div>
            </div>
            <div class="col-mb-8">
                <div class="mb-3">
                    <label for="" class="form-label">Link Text</label>
                    <input id="linktext" type="text" class="form-control" v-model="text2">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input id='checkbox' type="checkbox"
                        class="form-check-input"
                        v-model="published2">
                        <label for="gridCheck1" class="form-check-label">Published</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary me-2"
            @click.prevent="submit">
                Edit
            </button>
            <button class="btn btn-secondary me-2"
            @click.prevent="goToPagesList">
                Cancel
            </button>
            <button class="btn btn-danger"
            @click.prevent="deletePage">
                Delete
            </button>
        </div>
    </form>


</template>

<script setup>
//composite API
import {useRouter} from 'vue-router';
import { inject,ref } from 'vue';

//Get props using $pramas in option API
const router= useRouter();
const pages = inject('$pages');
const bus = inject('$bus');
//method to get props using built in property
const {index} = defineProps(['index']);

let page = pages.getSinglePage(index)

let title2 = ref(page.pageTitle);
let content2 = ref(page.pageContent);
let text2 = ref(page.link.text);
let published2 = ref(page.published);

function submit(){ 


    let updatedPage = {
        pageTitle:  title2.value,
            pageContent: content2.value,
            link: {
                text: text2.value
                },
            published: published2.value
    }
    pages.editPage(index,updatedPage);

    bus.$emit('page-updated',{
        index,
        updatedPage
    })

    goToPagesList();
}

function deletePage() {
    pages.removePage(index);

    bus.$emit('page-deleted',{index});
    goToPagesList();
}

function goToPagesList(){
    router.push({path:'/pages'})
}

</script>