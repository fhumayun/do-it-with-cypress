<template>
  <div>
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <span v-if="todo.done"> ✓</span>
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