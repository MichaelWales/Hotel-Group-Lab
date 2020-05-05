<template lang="html">
  <div>
    <form id="bookings-form" v-on:submit.prevent="handleSubmit">
    <h2>Add a Booking</h2>
    <span>
      <label for="name">Name:</label>
      <input required type="text" id="name" v-model="customer" />


      <label for="email address">Email Address:</label>
      <input required type="text" id="email address" v-model="emailAddress" />

      <button type="submit"> Save </button>
    </span>
    </form>
    <hr>
   </div>
</template>
<script>

import {eventBus}from'@/main.js'

export default {
  name: 'booking',
  methods: {
    handleSubmit(){
      const payload = {
        customer: this.customer,
        emailAddress: this.emailAddress,
        checkedIn: false
      }
      eventBus.$emit('booking-added', payload)
    }
  },
  data(){
    return {
      customer: null,
      emailAddress: null
    }
  }
}
</script>
<style lang="css" scoped>
</style>
