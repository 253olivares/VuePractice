<template>
    <!-- Button declare onclick event and binding color into style to declare our background color and then placing whatever text being passed down into text -->
    <button @click="onClick()" :style="{background:color}" class="btn" >{{text}}</button>
</template>

<!-- Our button component that is passing does color and text props that display in the button and 
    change depending if we are showing our add task form
 -->

<script>
    export default {
        name: 'button',
        props: {
            text: String,
            color: String,
        },
        // method onclick that is triggered when our event 
        methods: {
            onClick(){
                this.$emit('btn-click');
            }
        }
    }
</script>

<style>
</style>