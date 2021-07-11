<template>
  <div class="new-todo">
    <input v-model.trim="newTodo" data-testid="new-todo" />
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

    function addTodo() {
      context.emit('add', newTodo.value)
      newTodo.value = ""
    }

    return {
      addTodo,
      newTodo 
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