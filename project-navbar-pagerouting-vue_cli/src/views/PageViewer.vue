<template>
    <!-- v-if loops through our page array and display each as a nav option -->
    <div v-if="page"  class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{page.pageContent}}</p>
    </div>
</template>

<script>
export default{
    // index prop that we take in from the url
    props:['index'],
    inject:['$pages'],
    // create is ran during the app life cycle to set our page and get our first page content
    created(){
        // added this id to help fix a bug where the app first load if it doesnt have a index param it will display nothing
        if (!this.index){
            this.page = this.$pages.getSinglePage(0)
        }else {
            this.page = this.$pages.getSinglePage(this.index)
        }
        // this.$watch(()=>this.$route.params,(newParams, prevParams)=>{
        //     this.page = this.$pages.getSinglePage(newParams.index)
        // })
    },
    data(){
        return {
            // basic page created from data
            page: {
                link : {text: "Home", url: "index.html"},
                pageContent : "This is the home content",
                pageTitle : "Home Page",
                published : true
            },
        }
    },
    // watch function that keeps track of the index and runs the function inside when vue as noticed that the index value has changed
    watch: {
        index(newIndex, oldIndex){
            this.page = this.$pages.getSinglePage(newIndex)
        }
    }
}
</script>

<style scoped>

h1{
    margin-top: 30px !important;
    margin-bottom: 30px !important;
}



</style>