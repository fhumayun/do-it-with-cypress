<template>
  <div class="new-todo">
    <input v-model.trim="newTodo" />
    <button @click="addTodo" :disabled="!newTodo">Add</button>
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