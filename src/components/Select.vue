<template>
  <div>
    <select v-model="selectedFruit">
      <option value="" disabled>果物を選択</option>
      <option value="りんご">りんご</option>
      <option value="バナナ">バナナ</option>
      <option value="みかん">みかん</option>
    </select>
    <p>選択した果実；{{ selectedFruit }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFruit: ''
    }
  }
}
</script>

<style>

</style>