<template>
  <div>
    <span class="todo-item" 
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
  cursor: pointer;
  line-height: 1.5em;
}

.done {
  text-decoration: line-through;
}
</style>