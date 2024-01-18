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
const bus = inject('$bus');
const pages = inject('$pages');
const router = useRouter();

let pageTitle = ref('');
let pageContent = ref('');
let linkText = ref('');
let published = ref(true);

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

        pages.addPage(newPage)

        bus.$emit('page-created',newPage);

        pageTitle='';
        pageContent='';
        linkText='';
        published = true;

        router.push({path: '/pages'});
    }

    const isFormInvalid = computed(()=> !pageTitle || !pageContent||!linkText);

    watch(pageTitle,(newTitle, oldTitle)=>{
        if(linkText.value === oldTitle){
            linkText.value = newTitle;
        }
    });

</script>