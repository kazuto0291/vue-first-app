<template>
  <div class="button">
    ボタン
  </div>
</template>

<script>
export default {

}
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