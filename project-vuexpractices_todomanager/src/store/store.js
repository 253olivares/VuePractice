import {createStore} from 'vuex';
import todos from './modules/todos'

// our state manager that loads in a module we creates for todo
// we could create the state manager in this file but to make things clean, easy to read and adjust we use a module,
// this allows room for another state manager in the future for a dif module 
//create store
const store = createStore({
    modules: {
        todos
    }
})

export default store;