<template>
  <section class="new-todo" aria-label="New ToDo Item">
    <input autofocus 
           class="input"
           v-model.trim="newTodoText"
           @keypress.enter="addTodo"
           ref="newTodoInput" 
           data-testid="new-todo" />
    <button class="button" 
            @click="addTodo" 
            :disabled="!newTodoText" 
            data-testid="btn-add-todo">
      Add
    </button>
  </section>
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
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  position: relative;
  /* width: 100%; */
}


</style>