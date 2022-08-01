<template>
  <q-page class="q-pa-md" style="padding-top: 74px">
    <todosList />
    <q-page-sticky expand position="top" class="full-width bg-white">
      <todosInput />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import todosList from "src/components/todos/todoList.vue";
import todosInput from "src/components/todoInput/todo-input.vue";
export default defineComponent({
  name: "IndexPage",
  setup() {},
  components: {
    todosInput,
    todosList,
  },
});
</script>
