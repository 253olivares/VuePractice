<template>
    <div v-if="page"  class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{page.pageContent}}</p>
    </div>
</template>

<script>
export default{
    props:['index'],
    inject:['$pages'],
    created(){
        this.page = this.$pages.getSinglePage(this.index)
        // this.$watch(()=>this.$route.params,(newParams, prevParams)=>{
        //     this.page = this.$pages.getSinglePage(newParams.index)
        // })
    },
    data(){
        return {
            page: {
                link : {text: "Home", url: "index.html"},
                pageContent : "This is the home content",
                pageTitle : "Home Page",
                published : true
            },
        }
    },
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