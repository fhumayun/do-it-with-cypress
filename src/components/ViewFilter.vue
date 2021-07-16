<template>
  <div>
    <span class="button view">
      <input type="radio" id="active" value="active" v-model="view">
      <label for="active">Active</label>
    </span>
    <span class="button view">
      <input type="radio" id="all" value="all" v-model="view">
      <label for="all">All</label>
    </span>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const view = ref(props.modelValue)

    watch(view, value => {
      context.emit('update:modelValue', value)
    })

    return {
      view
    }
  }
}
</script>

<style scoped>
.view {
  float: left;
  margin: 0 5px 0 0;
  width: 100px;
  height: 40px;
  position: relative;

  margin-top: 2em;

}

.view label,
.view input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view input[type="radio"] {
  opacity: 0.01;
  z-index: 100;
}

.view input[type="radio"]:checked+label {
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.view label {
  padding: 5px;
  border: 1px solid #CCC;
  cursor: pointer;
  z-index: 90;
}
</style>