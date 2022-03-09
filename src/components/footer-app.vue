<template>
  <p @scroll="isOneLine = !isOneLine">2020 © HOROSCOP PERSONAL</p>
</template>

<script>
export default {
  name: "footer-app",
  data() {
    return {
      isOneLine: true
    }
  }
}
</script>

<style scoped>

</style>
