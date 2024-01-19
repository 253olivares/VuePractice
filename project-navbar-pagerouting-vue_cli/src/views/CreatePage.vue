<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input
                    v-model="pageTitle"
                    type="text" 
                    class="form-control">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Content
                    </label>
                    <textarea type="text" class="form-control" rows="5" v-model="pageContent"></textarea>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" class="form-control" v-model="linkText">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <button
                class="btn btn-primary"
                :disbled="isFormInvalid"
                @click.prevent="submitForm"
                >Create Page</button>
        </div>
        </form>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {ref,inject, computed,watch} from 'vue';
// inject our global listeners
const bus = inject('$bus');
const pages = inject('$pages');
// use router to redirect us after we save the new page
const router = useRouter();

// creates ref that we will be adjusting to set new values
let pageTitle = ref('');
let pageContent = ref('');
let linkText = ref('');
let published = ref(true);

// when user is satisfied with their entry we check to make sure all forms are filled
// then create a new object with those values
// and push then to our controller that talks to our localstorage db
function submitForm(){
        if (!pageTitle || !pageContent ||!linkText ){
            alert('Please fill the form.')
            return;
        }

        let newPage={
            pageTitle: pageTitle.value,
            pageContent: pageContent.value,
            link: {
                text: linkText.value,
                },
            published: published.value
        }
        // appends new object to exist page and updates localstorage db
        pages.addPage(newPage)
// global listener
        bus.$emit('page-created',newPage);
        // reset our inputs
        pageTitle='';
        pageContent='';
        linkText='';
        published = true;
        // redirect after the function is finished
        router.push({path: '/pages'});
    }
    // form invalid make sure that we have all our values
    const isFormInvalid = computed(()=> !pageTitle || !pageContent||!linkText);
    // watch listens to check if page title is changes
    // if it detects that page title has changed and the link text is the same it binds both values to they change
    // at the same time with the same letters.
    // if one changes link text before pagetitle then code doesnt run and both values do not change in sync
    watch(pageTitle,(newTitle, oldTitle)=>{
        if(linkText.value === oldTitle){
            linkText.value = newTitle;
        }
    });

</script>