<template>
  <!-- Our home vue where a majority of the task work happens in here we show and hide our add task component 
        using v-if when our showAddTask value is true -->

     <div v-if="showAddTask">
      <!-- once it shows we are listening for for a addtask emit from child element ro trigger add task which is covered below -->
      <AddTask @add-task="addTask"></AddTask>
    </div>
    <!-- Task component where it displays our task by array. We can see it pass tasks in the :task attribute
          component is also listening for the following emits from child elements toggle reminder and delete task to then 
          trigger the methods provided within-->
    <Tasks @toggleReminder="toggleReminder" @deleteTask="deleteTask"  :tasks="tasks"></Tasks>
</template>

<script>
// importing necessary components
    import Tasks from '../components/Tasks.vue'
    import AddTask from '../components/AddTask.vue'

    export default {
      //standard export defaults
        name:'Home',
        //check for showAddTask prop that is always going to be a boolean and check to see if we are to be showing our add task component
        props:{
            showAddTask:Boolean,
        },
        // load our components
        components: {
            Tasks,
            AddTask
        },
        // creates a blank data to start our app
        data() {
            return {
                tasks:[]
            }
        },
        // largest section of our code where most of the app functionality occurs
        //app doesnt work without a fake rest api. this is reliant on loading our json data using fetch api 
        // we run a fake server to allow our application make read and writes to our text document so it can be loaded on next refresh
        // or return
        methods:{
          // first function is delete task which takes in an id and makes sure we want to delete task
          // if user accepts we run the fetch function we send a request for tasks/:set id  with a parameter to delete the api
            async deleteTask(id){
              if(confirm('Are you sure?')){

              const res = await fetch(`api/tasks/${id}`,{
              method: 'DELETE'
              })
              //if res return is 200 which stands for successful function
              //turnery lets this filter our the task with said id from the array.
              // if current array object id doesnt match provided id then we eject object from array 
              res.status === 200 ? (this.tasks = this.tasks.filter((task)=> task.id !==id )) : alert('Error deleting task');}
            },

            // function toggle reminder that runs to toggle our tasks reminder value to set from true to false 
            // begins by getting our task with given value we then create a const of the updates task spread all existing objects variables
            // after existing variables spread we mount our new reminder value with the same object name so that json then replaced reminder
            // with the newest instance
            // fe fetch id to put our new task json automatically updates the values that have changed
            async toggleReminder(id){

              const taskToToggle = await this.fetchTask(id);

              const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

              const res = await fetch( `api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
              },
              body:JSON.stringify(updateTask)
              })

              // after we successful update our value we grab object we then remap our array

              const data = await res.json();
              // we take our current task and map through the array until array id matches id that was passed at the start of the function
              // once we have a match we spread the existing task and then mount the new task reminder allowing json to overwrite the old value 
              this.tasks = this.tasks.map((task) => task.id == id ? {...task, reminder: data.reminder} : task);
            },
          
            //add task just takes our new object passed in the function param and posts it to our text file
            //function that just appends the new task to the existing array by spreading existing objects 
            async addTask(task){
              const res = await fetch('api/tasks',{
              method: 'POST',
              headers: {
              'Content-type': 'application.json',
              },
                body: JSON.stringify(task),
              })

              const data = await res.json();

              this.tasks = [...this.tasks, data]
            },
            //Fetch is also straight forward we just fetch all the data this api location feeds back
            async fetchTasks(){
              const res = await fetch('api/tasks');

              const data = await res.json();

              return data;
            }, 
            // same as previous fetch task just with an id to specific a specific api entry point we want to access for a specific object. 
            async fetchTask(id){
              const res = await fetch(`api/tasks/${id}`);

              const data = await res.json();

              return data;
            }
        },

        // this is default function that is ran to create our task array by fetching all the objects within our text file 
        // calls our fetchTasks method and sits outside the object to run at first run 
        async created() {
            this.tasks = await this.fetchTasks();
        },
    }
</script>