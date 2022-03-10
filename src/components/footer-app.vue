<template>
  <p class="footer" @scroll="isOneLine = !isOneLine">2020 © HOROSCOP PERSONAL</p>
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
  .footer {
    width: 100vw;
    height: 23px;

    display: flex;
    justify-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    text-align: center;
    text-transform: lowercase;

    color: #D6D6D6;
  }
</style>
