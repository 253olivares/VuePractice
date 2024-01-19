<template>
    <!-- our nav  -->
<nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <!-- we loop through our pages passed to us through a computed function that will keep published pages updates
            with what pages changes to
            V-show hides all our navs that publish is set to false  -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavbarLink  v-for="(page,index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                        v-show="page.published"
                    ></NavbarLink>
                    <li>
                    <router-link
                    to="/pages"
                    class="nav-link" 
                    aria-current="page"
                    active-class="active emphasize" 
                    >Pages</router-link>
                    </li>
            </ul>
            <form class="d-flex">
                <!-- our button in nav that will change theme when clicked -->
                <button
                class="btn btn-primary"
                @click.prevent = "changeTheme()">
                Toggle Nav Bar
                </button>
            </form>
        </div>
    </nav>
</template>

<script>

import NavbarLink from './NavbarLink.vue';
    export default {
        // injecting our global variables
        
        inject:['$pages','$bus'],
        components: {
        NavbarLink
        },
        computed: {
            // published pages filters out our pages and creates a new array of just pages
            // that have published set to true.

            // this creates a bug where because now we have 2 arrays and linkes become out of sync if inner objects are hidden
            // this could be fixed if we just pass pages and change navbarlink to us v-show when published is true.
            publishedPages() {
                // return this.pages.filter(p => p.published)
                return this.pages
            }
        },
        // create life cycle creates our event listeners that we will be looking for 
        // these listeners update th nave bar whenever 
        created() {
            // get stored theme from local storage db
            this.getStoreThemeSetting();
            // get our pages from pages global
            this.pages = this.$pages.getAllPages();
            // creates custom event listener that listens for this emit from child components
            this.$bus.$on('page-updated',()=>{
                console.log(this.$pages.getAllPages());
                this.pages=[...this.$pages.getAllPages()]
            });
            // creates custom event listener that listens for this emit from child components
            this.$bus.$on('page-created',()=>{
                console.log(this.$pages.getAllPages());
                this.pages=[...this.$pages.getAllPages()]
            });
            // creates custom event listener that listens for this emit from child components
            this.$bus.$on('page-deleted',()=>{
                console.log(this.$pages.getAllPages());
                this.pages=[...this.$pages.getAllPages()]
            });
        },  
        data(){
            return{
                theme: 'light',
                pages: []
            }
        },
        // methods that allow us to change themes and store those changes in our local storage db
        methods: {
            changeTheme(){
                let theme = "light";
                if(this.theme == 'light'){  
                    theme = 'dark';
                }
                this.theme = theme;
                this.storeThemeSetting();
            },
            storeThemeSetting(){
                localStorage.setItem('theme',this.theme)
            },
            // get our stored theme
            getStoreThemeSetting(){
                let theme = localStorage.getItem('theme')
                if(theme) {
                    this.theme = theme;
                }
            }
        },
    }
</script>