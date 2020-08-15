<template>
  <div>
    <p>カウント：{{ count }} </p>
    <button @click="count++">{{ buttonTitle }} </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    buttonTitle: {
      type: String,
      required: true,

    },
    initialCount: {
      type: Number,
      requirded: false,
      default: 0

    }
  },
  data() {
    return {
      count: this.initialCount
    }
  }
}
</script>

<style>

</style>