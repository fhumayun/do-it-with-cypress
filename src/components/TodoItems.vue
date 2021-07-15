<template>
  <main>
    <h2>To Do List</h2>
    <AddTodo @add="addTodo" />
    <section aria-label="ToDo Items">
      <ul class="todo-items">
          <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ul>
    </section>
  </main>
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
.todo-items {
  display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;

    width: 400px;
}

.todo-items > :last-child {
  margin-bottom: 0;
}
</style>