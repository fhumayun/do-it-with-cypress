<template>
  <div>
    <h2>Settings</h2>
    <form>
      <LabeledInput id="firstName" label="Firstname" v-model="user.firstName" />
      <LabeledInput id="lastName" label="Lastname" v-model="user.lastName" />
      <LabeledInput id="email" label="E-Mail" type="email" v-model="user.email" />
      <LabeledInput class="range" id="happiness" label="Happiness" type="range" v-model.number="user.happiness" />
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
          <input id="unknown" type="radio"  v-model="user.gender" value="" >
          <label class="label" for="unknown">Unknown</label>
        </span>
      </div>
      <div class="input-group">
        <label class="label" for="country">Country</label>
        <select id="country" class="input select" v-model="user.country">
            <option disabled value="">Please select a country</option>
            <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
        </select>
      </div>
      <div class="input-group">
        <input id="newsletter" type="checkbox" class="checkbox" v-model="user.newsletter" >
        <label class="label" for="newsletter">Newsletter</label>
      </div>
      <div class="input-group">
        <label class="label" for="result">Result</label>
        <textarea id="result" class="input" rows="10" readonly :value="JSON.stringify(user, null, 2)" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'

import LabeledInput from './LabeledInput.vue'

import { countries } from './countries'

export default {
  components: { LabeledInput },
  setup () {
    const user = ref({
      firstName: 'Donald',
      lastName: 'Duck',
      email: '',
      happiness: 80,
      gender: '',
      country: 'US',
      newsletter: false,
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