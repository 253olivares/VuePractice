import axios from 'axios';
// create a state we will be watching
const state = {
    todos: []
};
  
// our getting gathers our state values we will call this whenever we need to access our state
const getters = {
    allTodos: state => state.todos
};
//  actions allow us to gather params that will then be pushed to our mutations 
// in other to call our mutations we gather our params and then us commit.
// commit name needs to match our mutation name

const actions = {
    // fetch all our todos from the api we have only read access no write access
    async fetchTodos({ commit }) {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );
  
      commit('setTodos', response.data);
    },
    // append a new todo object to our array and api. This change does not occur on their end. Causing an issue when 
    // we try to update our todo above the id of 200
    async addTodo({ commit }, title) {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false }
      );
  
      commit('newTodo', response.data);
    },
    // delete todo with select id that is passed to the api request
    async deleteTodo({commit},id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },
    // we pass a value from our filter selection that shortens our selection of todos
    async filterTodos({commit},e){
        //get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(limit)
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos',response.data);
    },
    // will cause an error if we try to update a todo above 200 since it does not exist on our api
    async updateTodo({commit},updatedTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,  updatedTodo);

        console.log(response.data);

        commit('updateTodo',response.data);

    }
};
// mutations changes our state values byt setting new values in our array or just object itself

const mutations = {
    // setTodos just grabs our state and sets new state to it 
    setTodos: (state, todos) => (state.todos = todos),
    // newTodo Appends our new todo that we add in our addTodo vue
    newTodo: (state, todo) => state.todos.unshift(todo),
    // remove accepts id param then filters our array searching for a todo with matching state id to exclude it from the new array
    // before over writing previous array 
    removeTodo: (state,id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    // update todo takes our todo in the app. We pass a todo with a adjusted value of reminder.
    updateTodo: (state,updatedTodo) => {
        // once it finds the index sets todo to new todo with updated value
        const index = state.todos.findIndex(todo=>todo.id===updatedTodo.id);
        if(index!==-1){
            state.todos.splice(index,1,updatedTodo)
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}