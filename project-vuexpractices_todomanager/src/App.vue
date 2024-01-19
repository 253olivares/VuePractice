
<template>
  <!-- main template for my todo -->
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>

// importing all components into main vue app
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
import FilterTodos from './components/FiltersTodos.vue';

export default {
  name: 'App',
  components: {
    // implementing components 
    Todos,
    AddTodo,
    FilterTodos
}
};
</script>

<style>
/* css that will extend all throughout the application */
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif ;
  line-height: 1.6;
  background: #e8f7f0;
}
.container{
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
