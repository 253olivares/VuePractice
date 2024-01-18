<template>
    <div :key="task.id" v-for="task in tasks">
        <Task @toggle-reminder="$emit('toggleReminder',task.id);" @deleteTask="$emit('delete-task', task.id);" :task="task"></Task>
    </div>
</template>

<script>

import Task from './task.vue'

    export default {
        name: 'Tasks',
        props: {
            tasks: Array,
        },
        components:{
            Task,
        },
        emits: ['deleteTask', 'toggleReminder']
    }
</script>