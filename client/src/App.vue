<template>
  <div id="app">
    <h2>Hotel Booking Form</h2>

        <booking-list :customersInBookingList="customers"/>


    <!-- <customer-select :customers="customers"/>

    <customer-detail v-if="selectedCustomer" :selectedCustomer="selectedCustomer">
    </country-detail>

    <button v-if="selectedCustomer && !bookingForm.some(customer => customer.name === selectedCustomer.name) " v-on:click="addToBookings">Book Customer</button> -->

  </div>
</template>

<script>
// import BookingForm from '@/components/HolidayBookingForm.vue';
// import BookingItem from '@/components/HolidayBookingItem.vue';
 import BookingList from '@/components/HolidayBookingList.vue';
// import BookingService from '@/services/BookingService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data() {
    return {
      customers: [],
      selectedCustomer: null,

    }
    },
    components:{
        'booking-list' : BookingList

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
