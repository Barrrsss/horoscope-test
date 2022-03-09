<template >
  <div class="container" @scroll="onScroll" >
    <MainApp></MainApp>
  </div>
</template>

<script>
import MainApp from './components/MainApp.vue'

export default {
  name: 'App',
  components: {
    MainApp
  },
  data() {
    return {
      scrollPosition: 0
    }
  },
  methods: {
    onScroll(event) {
      console.log(event.target)
      let container = event.target
      this.scrollPosition = container.scrollTop
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
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  font-family: Roboto,sans-serif;
}

.container {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
