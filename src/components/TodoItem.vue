<template>
  <div>
    <span :class="{ done: todo.done }" :data-testid="`todo-${todo.id}-text`">
      {{ todo.text }}
    </span>
    <span v-if="todo.done"  :data-testid="`todo-${todo.id}-done`"> ✓</span>
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
    return {}
  }
}
</script>

<style scoped>

</style>