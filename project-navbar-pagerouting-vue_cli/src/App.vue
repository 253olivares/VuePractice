<template>
    <!-- currently application has a bug where on first load will not return page content 
        because it passes null in array which returns nothing from the array -->

     <!-- Nav bar component -->
    <Nav> </Nav>

    <!-- router view component brought in using router -->
    <router-view></router-view>
    <!-- <PageViewer v-if="pages.length>0" :page="pages[activePage]"> </PageViewer>

  <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
    import Nav from './components/Nav.vue';

    export default{
        // load nav component
        components: {
            Nav
        },
        // 
        methods: {
            // method that takes object from the create page and pushes it into our array that keeps track of current pages.
            pageCreated(pageObj) {
                this.pages.push(pageObj);
            }
        }
    }
</script>