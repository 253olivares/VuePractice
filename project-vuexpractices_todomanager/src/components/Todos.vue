<template>
    <div>
        <h3>Todos</h3>
<!-- our main todos component where all our todos from the api is displayed -->
        <div class="legend">
          <span>Double click to mark as complete</span>
          <span>
            <span class="incomplete-box"></span> = Incomplete
          </span>
          <span>
            <span class="complete-box"></span> = Complete
          </span>
        </div>
        <div class="todos">
          <!-- here we loop and create a div for each todo as we loop we place the todo variables in the object
          we then us a bind on our class to give a class is complete with our completed is true. This is how we keep track
          of our todos. A doubleclick event listener then makes sure to run the todo function that changes our is complete
          class. Removes if is complete is false -->
            <div 
            @dblclick="onDblClick(todo)"
            v-for="todo in allTodos" 
            :key="todo.id" 
            class="todo"
            v-bind:class="{'is-complete' : todo.completed}"
            >
            {{ todo.title }}

            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
// import our getters and actions from state vuex
import { mapGetters, mapActions } from "vuex";

  export default {
    name:"Todos",
    methods: {
      // spread our actions so we can use them
      ...mapActions(["fetchTodos","deleteTodo","updateTodo"]),
      // double click listener that returns our previous todo and creates a new todo with an updated complete the flips our bool value
      // this new todo replaces our previous todo
      onDblClick(todo) {
        const updatedTodo = {
          id: todo.id,
          title: todo.title,
          completed:!todo.completed
        }
        // we run update todo to update our array. vue then rerenders our v-for
        this.updateTodo(updatedTodo)
      }
    },
    // computed is our getter runs at the start when said computer is run to return a value
    computed: mapGetters(["allTodos"]),
    created(){
      // fetches our todo during the mount app life cycle
      this.fetchTodos();
    }
  };

</script>

<style scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap:1rem;
}

.todo {
   border: 1px solid #ccc;
   background: #41b883;
   padding:1rem;
   border-radius:5px;
   text-align: center;
   position: relative;
   cursor: pointer;
}

i{
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete{
  background: #35495e;
  color: #fff;
}

@media (max-width: 800px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

</style>