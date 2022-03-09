<template>
  <HeaderApp></HeaderApp>
  <h1>1</h1>
  <FooterApp></FooterApp>
</template>

<script>
import FooterApp from './footer-app.vue'
import HeaderApp from './header-app.vue'
export default {
  name: "MainApp",
  components: {
    FooterApp,
    HeaderApp
  }
}
</script>

<style scoped>

</style>
