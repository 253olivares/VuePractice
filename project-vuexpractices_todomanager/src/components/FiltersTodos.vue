<template>
    <div>
        <!-- filter component with a change listener that will run filter todos everytime vue detects that our select has changed
        We pass our event that targets the inner html in state manager -->
        Filter Todos:
        <!-- $Event is a special viable that passes the dom element in this case we are passing select and its children -->
        <select @change="filterTodos($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
// import our actions
export default {
    name:"FilterTodos",
    // since this is the only method we dont need to spread our actions we can just call filterTodos and then use it in our change
    // event listener
    methods:mapActions(["filterTodos"]),
}
</script>

<style>

select{
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid;
}

</style>