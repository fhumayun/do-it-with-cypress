<template>
  <div>
    <h2>TodoItems</h2>
    <div>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import TodoItem from './TodoItem.vue'

export default {
  components: { TodoItem },
  setup () {
    const todos = ref([
      { id: 1, text: 'Learn Vue', done: true},
      { id: 2, text: 'Learn Cypress', done: false },
    ]);

    return {
      todos
    }
  }
}
</script>

<style scoped>

</style>