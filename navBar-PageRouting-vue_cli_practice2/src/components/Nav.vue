<template>
<nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar','navbar-expand-lg']">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavbarLink  v-for="(page,index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
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
        inject:['$pages','$bus'],
        components: {
        NavbarLink
        },
        computed: {
            publishedPages() {
                return this.pages.filter(p => p.published)
            }
        },
        created() {
            this.getStoreThemeSetting();
            this.pages = this.$pages.getAllPages();
            this.$bus.$on('page-updated',()=>{
                console.log(this.$pages.getAllPages());
                this.pages=[...this.$pages.getAllPages()]
            });
            this.$bus.$on('page-created',()=>{
                console.log(this.$pages.getAllPages());
                this.pages=[...this.$pages.getAllPages()]
            });
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
            getStoreThemeSetting(){
                let theme = localStorage.getItem('theme')
                if(theme) {
                    this.theme = theme;
                }
            }
        },
    }
</script>