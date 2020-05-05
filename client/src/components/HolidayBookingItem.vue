<template lang="html">
  <div v-bind:class="booking.checkedIn ? 'checkedIn': 'notCheckedIn'">
  {{booking.customer}},
  {{booking.emailAddress}},
  {{booking.checkedIn}}
    <button type="button" v-on:click="deleteHandle"> Delete Booking </button>
    <button type="button" v-on:click="checkedInHandle"v-if="!booking.checkedIn"> Check in Customer </button>
    <!-- <label for="customer_select">Select a Customer:</label>
    <select id="customer_select" v-on:charge="customerSelected"model="selectedCustomer">
      <option disabled value="">Select a customer</option>
      <option v-for="customer in customers":value="customer">{{customer.name}}</option>
    </select> -->
  </div>
</template>
<script>
import {eventBus} from '@/main.js'
export default {
  name: 'customer-select',
  props: ['booking'],
  data() {
    return {
      selectedCustomer: null
    }
  },
  methods: {
    bookingSelected(){
      eventBus.$emit('booking-selected', this.booking)
    },
    deleteHandle(){
      eventBus.$emit('delete-booking',this.booking)
    },
    checkedInHandle(){return 'hello'}
  }
}
</script>
<style lang="css" scoped>
.notCheckedIn{
  background-color: coral;
}
.checkedIn{
  background-color: lightgreen;
}
</style>
