<template>
  <div class="new-todo">
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
  </div>
</template>

<script>
import { ref } from 'vue'
const newTodoText = ref("X");

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

.input {
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  color: #212529;
  font-size: 1em;
  line-height: 1.5;
  padding: 0.5em 1em;
  position: relative;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.button {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0;
  cursor: pointer;
  font-size: 1em;
  margin-left: -1px;
  padding: 0.5em 1em;
}

.button:focus, .input:focus {
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin-left: 0;
  outline: none;
}
</style>