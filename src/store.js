import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    loading: false,
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    isDeleting(state, id) {
      state.todos.forEach((todo) => {
        if(todo._id == id) {
          todo.isDeleting = true;
        }
      });
    },
    isNotDeleting(state, id) {
      let tempArr = [];
      state.todos.forEach((todo) => {
        if(todo._id !== id) {
          tempArr.push(todo);
        }
      });
      state.todos = tempArr;
    }
  },
  actions: {

  }
})
