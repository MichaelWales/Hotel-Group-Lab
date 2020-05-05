<template lang="html">
  <div id="selected_customer">
    <h2> {{selectedCustomer.name}} </h2>
</template>

<script>
export default {
  name: 'customer-detail',
  props: ['selectedCustomer']
}
</script>

<style lang="css" scoped>
</style>
