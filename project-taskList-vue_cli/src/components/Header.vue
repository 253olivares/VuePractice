<template>
    <header>
        <!-- header component displays title from props that was imported  -->
        <h1>{{title}}</h1>
        <!-- v-show to make sure button only displays when the route is set to / for home page but click event emit toggleAddTask to move function to parent component
            showAdd Task is bind to text attribute and color attribute is bind to text and color with a ternary to change the value depending on if showAddTask is true or not 
        -->
        <Button v-show="homePage" @btn-click="$emit('toggleAddTask')" :text="showAddTask ? 'Close' : 'Add Task'" :color="showAddTask ? 'red' : 'green'"></Button>
    </header>
</template>

<script>

    // importing our button component that is being used to display our add task form
    import Button from './Button.vue'


    export default{
        // typical naming convention
        name: 'Header',
        // Defining props being passed down from app
        props: {
            // additional type checks to make sure we are passing down a bool or string and provide a default if value is missing
            title: {
                type:String,
                default: 'Hello World'
            },
            showAddTask: Boolean
        },
        // importing my button component
        components: {
            Button,
        },
        // computed function that is defined at the start with the page loads
        computed: {
            homePage(){
                if(this.$route.path ==='/'){
                    return true
                } else{
                    return false
                }
            }
        },
        // our emit that is being passed to our app to tell the app button is clicked new value is then passed back through
        emits: ['toggleAddTask']
    }
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>