<template>
  <div>
    <input
    id="checkbox"
    type="checkbox"
    v-model="checked"
    >
    <label for="checkbox">チェック</label>
    <p>チェック値 {{ checked}} </p>

    <input type="checkbox" value="りんご" v-model="checkedFruits">りんご
    <input type="checkbox" value="バナナ" v-model="checkedFruits">バナナ
    <input type="checkbox" value="みかん" v-model="checkedFruits">みかん
    <p>選択した果実；{{ checkedFruits }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checkedFruits: []
    }
  }
}
</script>

<style>

</style>