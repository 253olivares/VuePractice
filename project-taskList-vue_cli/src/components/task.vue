<template>
    <!-- Our actual task display thjat emites toggle reminder when the user triggers the double click event 
        Then we use a ternary to display a class that shows that the task is active when our individual task reminder == 'reminder' -->
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder': '', 'task']">
        <!-- bind our task array to the component elements to our h3 and p to show our values -->
        <h3>{{ task.text }} <i @click="onDelete(task.id);" class="fas fa-times"></i></h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
    export default {
        // standard set up name get props from parent element and then a method that emits an delete function to our 
        // parent component to pass up to home vue. With it id is passed from our array id
        name: 'Task',
        props:{
            task:Object,
        },
        methods:{
            onDelete(id){
                this.$emit('delete-task', id)
            },  
        },
        
    }
</script>

<style scope>

.fas{
    color: red;
}

.task{
    background:#f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder{
    border-left:5px solid green;
}

.task h3{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>