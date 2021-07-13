<template>
  <div class="todo-item">
    <span class="todo-item-text"
          :class="{ done: todo.done }" 
          @click="toggleTodo(todo)"
          :data-testid="`todo-${todo.id}-text`">
      {{ todo.text }}
    </span>
    <span v-if="todo.done"  
          :data-testid="`todo-${todo.id}-done`"> ✓</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
        type:Object,
        required:true
    }
  },
  setup () {
    return {
      toggleTodo(todo) {
        todo.done = !todo.done;
      },
    }
  }
}
</script>

<style scoped>
.todo-item {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-top-width: 0;
  padding: .5rem 1rem;
}

.todo-item:first-child {
  border-top-width: 1px;
}

.todo-item-text {
  cursor: pointer;
  line-height: 1.5em;
}

.done {
  text-decoration: line-through;
}
</style>