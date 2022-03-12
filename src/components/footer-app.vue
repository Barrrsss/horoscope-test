<template>
  <p v-show="!this.$store.state.footer" class="footer" >2020 © HOROSCOP PERSONAL</p>
  <p v-show="this.$store.state.footer" class="footer footer_big" >TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 </p>
</template>

<script>
export default {
  name: "footer-app",
  data() {
    return {

    }
  },
  computed: {
    footer() {
      return this.$store.getters.getFooter;
    }
  },
}
</script>

<style scoped>
  .footer {
    width: 100vw;
    height: 30px;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    text-align: center;
    text-transform: lowercase;
    color: #D6D6D6;
  }
  .footer_big {
    width: 100vw;
    height: 30px;
    font-weight: 700;
    font-size: 6px;
    line-height: 7px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 5px;
    color: #C9C9C9;
    flex: 0 0 auto;
  }
</style>
