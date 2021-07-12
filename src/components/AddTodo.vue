<template>
  <div class="new-todo">
    <input autofocus 
           v-model.trim="newTodoText"
           @keypress.enter="addTodo"
           ref="newTodoInput" 
           data-testid="new-todo" />
    <button @click="addTodo" 
            :disabled="!newTodoText" 
            data-testid="btn-add-todo">
      Add
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
const newTodoText = ref("");

export default {
  setup (props, context) {

   const newTodoInput = ref(null)

    function addTodo() {
      context.emit('add', newTodoText.value)
      newTodoText.value = ""
      newTodoInput.value.focus()
    }

    return {
      addTodo,
      newTodoInput,
      newTodoText,
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