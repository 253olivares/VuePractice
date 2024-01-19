<template>
    <Nav> </Nav>

    <router-view></router-view>
    <!-- <PageViewer v-if="pages.length>0" :page="pages[activePage]"> </PageViewer>

  <create-page @page-created="pageCreated"></create-page> -->
</template>

<script>
    import Nav from './components/Nav.vue';

    export default{
        components: {
            Nav
        },
        methods: {
            pageCreated(pageObj) {
                this.pages.push(pageObj);
            }
        }
    }
</script>