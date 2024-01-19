<template>
    <!-- nav bar link -->
    <li>
        <!-- router link is a route component that changes our router to point to specific index in our pages array -->
        <router-link
            :to="`/${index}`"
            class="nav-link" 
            active-class="active emphasize" 
            aria-current="page" 

            :title="`This link goes to the ${page.link.text} page.`" 
            >{{ page.link.text }}</router-link>
    </li>
</template>

<script>

export default {
    // we pass our pages object to display specific text
    // additionally pass our index
    props: ['page','index'],
}
</script>

<style>
.emphasize{
    text-decoration: underline !important;
}
</style>