<template>
  <div>
    <h2>Settings</h2>
    <form>
      <div class="input-group">
        <label class="label">Firstname</label>
        <input class="input" v-model="user.firstName" >
      </div>
      <div class="input-group">
        <label class="label">Lastname</label>
        <input class="input" v-model="user.lastName" >
      </div>
      <div class="input-group">
        <label class="label">Country</label>
        <select class="input" v-model="user.country">
            <option disabled value="">Please select a country</option>
            <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

import { countries } from './countries'

export default {
  setup () {
    const user = ref({
      firstName: 'Donald',
      lastName: 'Duck',
      country: 'US'
    })

    return {
      countries,
      user
    }
  }
}
</script>

<style scoped>

h2 {
    text-align: center;
}
</style>