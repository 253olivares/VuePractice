<template>
    <!-- tasks template that loops tasks  --> 
    <!-- task in tasks loops our prop array passed down from home vue toggle-reminder passes up emit toggle reminder with id when it recieves an emit from child element. 
        This is then taken up to Home. Same with delete task send emit up to home vue and then bind individual task down to the task component itself to display array value -->
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggleReminder',task.id);" @deleteTask="$emit('delete-task', task.id);" :task="task"></Task>
    </div>
</template>

<script>

import Task from './task.vue'
    
    export default {
        name: 'Tasks',
        // grabs tasks prop passed down and makes sure its an array
        props: {
            tasks: Array,
        },
        // task component that that we are important from further down the dom tree
        components:{
            Task,
        },
        // declares our emits that we will be passing up from this component
        emits: ['deleteTask', 'toggleReminder']
    }
</script>