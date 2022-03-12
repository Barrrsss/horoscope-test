<template>
  <div class="container" @scroll="onScroll">
    <HeaderApp />
    <router-view></router-view>
    <FooterApp />
  </div>
</template>

<script>

import HeaderApp from './components/header-app'
import FooterApp from './components/footer-app'


export default {
  name: 'App',
  props: [ 'posts' ],
  components: {
    HeaderApp,
    FooterApp
  },
  data() {
    return {
      scrollPosition: 0,
      footer: false
    }
  },
  methods: {

    onScroll(event) {
      this.$store.state.footer = true;
      let container = event.target;
      this.scrollPosition = container.scrollTop;
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local("Roboto"), url("./fonts/Roboto/Roboto-Regular.woff2") format("woff2"), url("./fonts/Roboto/Roboto-Regular.woff") format("woff");
}

body {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  position: relative;
  font-family: Roboto,sans-serif;
  box-sizing: border-box;
}

.container {
  height: 100vh;
  min-height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
