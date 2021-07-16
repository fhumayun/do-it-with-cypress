<template>
  <div>
    <h2>Settings</h2>
    <form>
      <div class="input-group">
        <label class="label" for="firstName">Firstname</label>
        <input id="firstName" type="text" class="input" v-model="user.firstName" >
      </div>
      <div class="input-group">
        <label class="label" for="lastName">Lastname</label>
        <input id="lastName" type="text" class="input" v-model="user.lastName" >
      </div>
      <div class="input-group">
        <label class="label" for="email">E-Mail</label>
        <input id="email" type="email" class="input" v-model="user.email" >
      </div>
      <div class="input-group">
        <label class="label" for="gender">Gender</label>
        <span class="radio">
          <input id="male" type="radio"  v-model="user.gender" value="male" >
          <label class="label" for="male">Male</label>
        </span>
        <span class="radio">
          <input id="female" type="radio"  v-model="user.gender" value="female" >
          <label class="label" for="female">Female</label>
        </span>
        <span class="radio">
          <input id="unknown" type="radio"  v-model="user.gender" value="unknown" >
          <label class="label" for="unknown">Unknown</label>
        </span>
      </div>
      <div class="input-group">
        <label class="label" for="country">Country</label>
        <select id="country" class="input" v-model="user.country">
            <option disabled value="">Please select a country</option>
            <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
        </select>
      </div>
      <div class="input-group">
        <input id="newsletter" type="checkbox" class="checkbox" v-model="user.newsletter" >
        <label class="label" for="newsletter">Newsletter</label>
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
      country: 'US',
      newsletter: false,
      gender: 'unknown',
      email: ''
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