<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <hr>

    <main>
      <slot name="default"></slot>
    </main>

    <hr>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
h1 {
  color: red;
}
h2 {
  color: green;
}
</style>