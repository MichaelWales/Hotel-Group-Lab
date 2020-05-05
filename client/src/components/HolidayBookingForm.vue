<template lang="html">
  <form id="sightings-form" v-on:submit.prevent="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="formWrap">
      <label for="email address">Email Address:</label>
      <input type="text" id="email address" v-model="email address" />
    </div>
     <li :class="guest.checked_in ? 'Checked In' : 'Not Checked in'" v-for="checked_in in holidayBookingForm">
     <button v-if="!guest.checked_in" v-on:click="updateList(guest)">Check In!</button>
</template>
<script>
export default {
}
</script>
<style lang="css" scoped>
</style>
