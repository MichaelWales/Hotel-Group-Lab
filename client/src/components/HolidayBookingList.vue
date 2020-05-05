<template lang="html">
    <div id="selected_customer">
        hello World
    <booking-item v-for="booking of customersInBookingList" :booking = "booking" />    
        <!-- <h2> {{selectedCustomer.name}} </h2> -->
    </div>
</template>
<script>
import BookingItem from '@/components/HolidayBookingItem.vue';
export default {
  name: 'customer-detail',
  props: ['customersInBookingList'],
  components: {
    'booking-item': BookingItem
  }
}
</script>
<style lang="css" scoped>
</style>
