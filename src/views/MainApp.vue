<template>
  <div class="page">
    <BannerApp />
    <TextApp />
    <FormApp />
  </div>
</template>

<script>

import BannerApp from '../components/banner-app.vue'
import TextApp from '../components/text-app.vue'
import FormApp from '../components/form-app.vue'

export default {
  name: "MainApp",
  components: {
    BannerApp,
    TextApp,
    FormApp
  }
}
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
</style>
