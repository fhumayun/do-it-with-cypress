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
import { ref, watch, computed } from 'vue'

import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'

function loadToDoItems() {
  try {
    const todoItems = localStorage.getItem('todoItems')
    if (todoItems) {
      return JSON.parse(todoItems)
    }
  }
  catch (e) {
    console.error(e);
  }

  return [
    { id: 1, text: 'Learn Vue', done: true},
    { id: 2, text: 'Learn Cypress', done: false },
  ]
}
export default {
  components: { AddTodo, TodoItem },
  props: {
    filter: {
        type: String,
        required: true
    }
  },
  setup(props) {
    const allTodos = ref(loadToDoItems());

    watch(allTodos.value, (value) => {
      localStorage.setItem('todoItems', JSON.stringify(value))
    })

    function addTodo(text) {
      allTodos.value.push({ id: Date.now(), text, done: false })
    }

    const todos= computed(() => {
      if (props.filter === "all") {
        return allTodos.value
      } else {
        return allTodos.value.filter(todo => !todo.done)
      }
    })

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