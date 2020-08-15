<template>
  <div
    class="button"
    @click="onClick($event, 'fugafuga')"
  >
    <!-- {{ title }} -->
  </div>
</template>

<script>
// export default {
//   props: {
//     title: {
//       type: String,
//       required: true
//     }
//   }

// }
</script>

<style>
  .button {
    display: inline-block;
    background: red;
    color: white;
    padding: 10px;
    cursor: pointer;
    margin-right: 5px;
  }

  .button:hover {
    background: blue
  }

  .button:active {
    background: green;
  }
</style>