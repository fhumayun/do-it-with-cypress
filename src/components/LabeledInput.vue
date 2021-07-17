<template>
 <div class="input-group">
   <label 
     class="label" 
     :for="$attrs.id">{{label}}</label>
   <input 
     type="text" 
     class="input" 
     :value="modelValue" 
     @input="$emit('update:modelValue', $event.target.value)" 
     v-bind="$attrs" />
 </div>

</template>

<script>
export default {
  inheritAttrs: false,
  props : ['label','modelValue']
}
</script>

<style scoped>

</style>