<template>
  <img alt="To Do List logo" src="./assets/pexels-breakingpic-3243.jpg" />
  <ViewFilter v-model="view" />
  <TodoItems :filter="view" />
</template>

<script>
import { ref } from 'vue'
import TodoItems from './components/TodoItems.vue'
import ViewFilter from './components/ViewFilter.vue'

export default {
  components: { TodoItems, ViewFilter },
  setup() {
    const view = ref('active')

    return {
     view,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
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
