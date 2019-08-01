import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {name: 'first'},
      {name: 'second'},
    ],
  },
  getters: {
    getTodoList(state) {
      return state.todoList;
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
    },
  },
  actions: {
    addTodo({commit}, todo) {
      commit('addTodo', todo);
    },
  },
});

export function useStore() {
  return store;
}
