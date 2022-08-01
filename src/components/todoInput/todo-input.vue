<template>
  <form @submit.prevent="todoSubmit" class="todo-head">
    <q-input
      outlined
      type="text"
      placeholder="Enter Todo Name"
      class="full-width"
      v-model="todoinput"
    >
    </q-input>
    <q-btn
      color="primary"
      class="q-ml-sm"
      icon="add"
      type="submit"
      padding="15px 20px"
    />

    <!-- <input  /> <button>Add</button> -->
  </form>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { useTodoStore } from "src/stores/todo-store";
const todoStore = useTodoStore();
const todoinput = ref("");
let id = ref(0);
const $q = useQuasar();
onMounted(() => {
  if (localStorage.getItem("todos"))
    todoStore.todos = JSON.parse(localStorage.getItem("todos"));
});
function todoSubmit() {
  if (todoinput.value) {
    try {
      todoStore.todos.unshift({
        id: ++id.value,
        todoName: todoinput.value,
      });
      todoinput.value = "";
      localStorage.setItem("todos", JSON.stringify(todoStore.todos));
    } catch {
    } finally {
      $q.notify({
        message: "Todo Added successfully",
        color: "positive",
        timeout: 100,
      });
    }
  }
}
</script>

<style scoped>
input {
  flex: 1;
}
input,
button {
  padding: 10px 15px;
}
.todo-head {
  max-width: 500px;
  display: flex;
  margin: auto;
  width: 100%;
  padding: 15px;
}
</style>
