<template>
  <form action="" @submit.prevent="onSubmit">
  <!-- <form action="" @submit="onSubmit"> -->
    <button type="submit">送信</button>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log('送信した')
    }
  }
}
</script>

<style>

</style>