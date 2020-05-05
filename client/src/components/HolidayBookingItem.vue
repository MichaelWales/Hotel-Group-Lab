<template lang="html">
  <div class="">
    <label for="customer_select">Select a Customer:</label>
    <select id="customer_select" v-on:charge="customerSelected"model="selectedCustomer">
      <option disabled value="">Select a customer</option>
      <option v-for="customer in customers":value="customer">{{customer.name}}</option>
    </select>
  </div>
</template>
<script>
import {eventBus} from '@/main.js'
export default {
  name: 'customer-select',
  props: ['customers'],
  data() {
    return {
      selectedCustomer: null
    }
  },
  methods: {
    countrySelected(){
      eventBus.$emit('customer-selected', this.selectedCustomer)
    }
  }
}
</script>
<style lang="css" scoped>
</style>
