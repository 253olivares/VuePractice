<template>
    <!-- our page management here we have a h2 and then router will inject our create page into this component 
            This router view and its components is handled by our child page route array we set in routes.js-->
    <div class="container">
        <h2>Page Management</h2>
        <router-view></router-view>
    </div>
</template>
<script>
export default [
    
]
</script>

<style>
    h2{
        margin-top: 30px !important;
        margin-bottom: 30px !important;
    }
</style>