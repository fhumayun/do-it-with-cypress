<template>
  <div>
    <h2>To Do List</h2>
    <AddTodo @add="addTodo" />
    <div>
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'

export default {
  components: { AddTodo, TodoItem },
  setup () {
    const todos = ref([
      { id: 1, text: 'Learn Vue', done: true},
      { id: 2, text: 'Learn Cypress', done: false },
    ]);

    function addTodo(text) {
      todos.value.push({ id: Date.now(), text, done: false })
    }

    return {
      todos,
      addTodo
    }
  }
}
</script>

<style scoped>

</style>