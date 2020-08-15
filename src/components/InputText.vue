<template>
  <!-- <input v-model="value"> -->
  <input v-model.number="value">
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>