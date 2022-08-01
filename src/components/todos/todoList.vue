<template>
  <div>
    <q-list bordered separator class="todo-list" v-if="todoLists.length">
      <transition-group name="list-complete">
        <q-item
          v-for="todolist in todoLists"
          :key="todolist.id"
          class="list-complete-item"
        >
          <todoItem :todolist="todolist" />
        </q-item> </transition-group
    ></q-list>

    <div v-else class="flex column todo-list items-center text-grey-5">
      <q-icon name="format_list_bulleted" size="50px" color="grey-5"></q-icon>
      You Don't have any todo list
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodoStore } from "src/stores/todo-store";
import todoItem from "../todo/todo-Item.vue";
const todoStore = useTodoStore();

const todoLists = computed(() => {
  return todoStore.todoList;
});
</script>

<style scoped>
.todo-list {
  margin: 25px auto;
  padding: 0;
  list-style-type: none;
  max-width: 470px;
  position: relative;
}
</style>
