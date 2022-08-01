<template>
  <q-item-section>{{ props.todolist.todoName }}</q-item-section>
  <q-item-section avatar>
    <q-btn @click="removeTodo" icon="delete"></q-btn>
  </q-item-section>
</template>

<script setup>
import { useQuasar } from "quasar";
import { defineProps } from "vue";
import { useTodoStore } from "src/stores/todo-store";
const props = defineProps(["todolist"]);
const todoStore = useTodoStore();
const $q = useQuasar();
function removeTodo() {
  console.log(props.todolist);
  for (let i = 0; i < todoStore.todos.length; i++) {
    if (todoStore.todos[i].id == props.todolist.id) {
      todoStore.todos.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("todos", JSON.stringify(todoStore.todos));
  $q.notify({
    message: "Todo Removed successfully",
    color: "negative",
    timeout: 100,
  });
}
</script>

<style scoped>
.todo-item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin-left: 15px;
  color: red;
  padding: 8px;
}
</style>
