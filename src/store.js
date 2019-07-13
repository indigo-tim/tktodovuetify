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
      todo.isDeleting = false
      todo.isUpdating = false
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
    },
    isUpdating(state, id) {
      state.todos.forEach((todo) => {
        if(todo._id == id) {
          todo.isUpdating = true;
        }
      })
    },
    markComplete(state, id) {
      state.todos.forEach((todo) => {
        if(todo._id == id) {
          todo.status = 'complete';
        }
      })
    },
    markIncomplete(state, id) {
      state.todos.forEach((todo) => {
        if(todo._id == id) {
          todo.status = null;
        }
      })
    }
  },
  getters: {
    completedTodos: state => {
      let tempCompletedArr = [];
      state.todos.forEach((todo) => {
        if(todo.status == 'complete') {
          tempCompletedArr.push(todo);
        }
      });
      return tempCompletedArr;
    },
    incompleteTodos: state => {
      let tempIncompleteArr = [];
      state.todos.forEach((todo) => {
        if(!todo.status) {
          tempIncompleteArr.push(todo);
        }
      });
      return tempIncompleteArr;
    }
  },
  actions: {

  }
})
