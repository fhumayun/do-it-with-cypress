<template>
  <div class="new-todo">
    <input autofocus v-model.trim="newTodo" ref="newTodoInput" data-testid="new-todo" />
    <button @click="addTodo" :disabled="!newTodo" data-testid="btn-add-todo">
      Add
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
const newTodo = ref("Sweet");

export default {
  setup (props, context) {

   const newTodoInput = ref(null)

    function addTodo() {
      context.emit('add', newTodo.value)
      newTodo.value = ""
      newTodoInput.value.focus()
    }

    return {
      addTodo,
      newTodo,
      newTodoInput,
    }
  },
  emits: ['add']
}
</script>

<style scoped>
.new-todo {
  margin-bottom: 1em;
}
</style>