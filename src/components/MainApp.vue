<template>
  <HeaderApp />
  <BannerApp />
  <TextApp />
  <FormApp />
  <ButtonNext />
  <FooterApp />
</template>

<script>
import HeaderApp from './header-app.vue'
import BannerApp from './banner-app.vue'
import TextApp from './text-app.vue'
import FormApp from './form-app.vue'
import ButtonNext from './button-next'
import FooterApp from './footer-app.vue'

export default {
  name: "MainApp",
  components: {
    HeaderApp,
    BannerApp,
    TextApp,
    FormApp,
    ButtonNext,
    FooterApp

  }
}
</script>

<style scoped>

</style>
