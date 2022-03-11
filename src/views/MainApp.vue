<template>
  <BannerApp />
  <TextApp />
  <FormApp />
  <FooterApp />
</template>

<script>

import BannerApp from '../components/banner-app.vue'
import TextApp from '../components/text-app.vue'
import FormApp from '../components/form-app.vue'
import FooterApp from '../components/footer-app.vue'

export default {
  name: "MainApp",
  components: {
    BannerApp,
    TextApp,
    FormApp,
    FooterApp
  }
}
</script>

<style scoped>

</style>
