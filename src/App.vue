<template>
  <div>
    <!-- <TextBox title="fuga" :onClick="click"/> -->
    <Header />
    <div class="app-container">
      <SideMenu />
      <Main />
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Main from './components/Main'
// import TextBox from './components/TextBox'

export default {
  components: {
    Header,
    SideMenu,
    Main,
    // TextBox
  },
  methods: {
    click() {
      console.log('@@@@@@@@')
    }
  }

}
</script>

<style>
.app-container {
  display: flex;
  padding-top: 60px;
}
</style>