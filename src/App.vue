<template>
  <img alt="To Do List logo" src="./assets/pexels-breakingpic-3243.jpg" />
  <TodoItems />
</template>

<script setup>
import TodoItems from './components/TodoItems.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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
</style>
