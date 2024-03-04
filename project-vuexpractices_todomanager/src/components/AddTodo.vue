<template>
    <div>
        <!-- Our Add Todo component that sits at the very top of our page here we create a submit and bind our title to our data
        When the user clicks submit we pass our title to our state manager which then updates the array -->
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="submit">
            </form>
        </div>
    </div>    
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name:"AddTodo",
    // data create to keep track of the new title name placed in the input
    data(){
        return {
            title:'',
        }
    },
    // Creating methods 
    // att the start we can see we are calling in our action from the state manger
    // we do this so that we can then later call this action in our on submit function
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            // on submit function calling our addTodo Action from state manager
            // we pass our title bind from the input so that we can then create a new object in our array
            this.addTodo(this.title);
            
            this.title = '';
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline:0;
}

input[type="submit"]{
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>