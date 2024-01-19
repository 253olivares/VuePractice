<!-- Todo Task manager that uses a fake fetch api tied to the db json on root. Project begins by npm install to make sure all dependencies in package json is installed properly  -->


<!-- My template where I lout my router header and footer -->
<template>
  <div class="container">
    <!-- all our components that was loaded for this application 
    \Future Note for myself: router view isnt a component we load separately it is included in the module we loaded in app of router from rout.js
   -->
    <!-- toggleAddTask Listening for event emit from our header component 
    Additionally we are passing down title props and show addtask
    -->
    <Header @toggleAddTask="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask" > </Header>
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  // normal naming convention
  name: 'App',
  components: {
    // components being loaded
    Header,
    Footer
  },
  // creating a data that keeps track of our add button component in our header if true show if false dont show. 
  // currently this date is binded to the header and passed down into the header component
  data() {
    return {
      showAddTask:false,
    }
  },
  // method that when calls switches our bool value of show add task. This is suppose to show and hide our add task component
  methods:{
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
