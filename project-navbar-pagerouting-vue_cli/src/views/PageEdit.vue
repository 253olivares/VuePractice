<template>
    <h4>Edit {{ page.pageTitle }}</h4>
<!-- our edit form this is pretty standard all it does it load select value from our nav selected in our previous page
then we are allows to make adjustments and if we click submit we collect information and replace index place with new information -->
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
            <!-- @click.prevent stops our page from reloading from button clicks -->
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
// use router allows us to redirect our page after we submit or cancel
const router= useRouter();
// inject global bus and pages
const pages = inject('$pages');
const bus = inject('$bus');
//method to get props using built in property
const {index} = defineProps(['index']);
// deconstruct index from our url

let page = pages.getSinglePage(index)
// sets page from calling our global function which returns our select object

// we create refs that allows us to call our previous values and set them in the divs above.
// using v-model we can bind the input to these values and then make changes
let title2 = ref(page.pageTitle);
let content2 = ref(page.pageContent);
let text2 = ref(page.link.text);
let published2 = ref(page.published);
// on submit we create a new object and grab our values

function submit(){ 


    let updatedPage = {
        pageTitle:  title2.value,
            pageContent: content2.value,
            link: {
                text: text2.value
                },
            published: published2.value
    }
    // edit pages is then passed to update our page index and inject new array into local storage db
    pages.editPage(index,updatedPage);

    // global event listener that passes new objects and declares what parent component should be listening for
    bus.$emit('page-updated',{
        index,
        updatedPage
    })

    // function to redirect us after we click submit
    goToPagesList();
}
// delete page allows us to delete from index 
function deletePage() {
    pages.removePage(index);

    bus.$emit('page-deleted',{index});
    goToPagesList();
}
// go to page just redirect us without any changes
function goToPagesList(){
    router.push({path:'/pages'})
}

</script>