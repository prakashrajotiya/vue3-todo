<template>
  <q-page class="q-pa-md" style="padding-top: 74px">
    <todosList />
    <q-page-sticky
      expand
      position="top"
      class="full-width"
      :class="$q.dark.isActive ? '' : 'bg-white'"
    >
      <todosInput />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import todosList from "src/components/todos/todoList.vue";
import todosInput from "src/components/todoInput/todo-input.vue";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "IndexPage",
  setup() {
    const $q = useQuasar();
  },
  components: {
    todosInput,
    todosList,
  },
});
</script>
