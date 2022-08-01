import { defineStore } from "pinia";
export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  getters: {
    todoList() {
      return this.todos;
    },
  },
});
