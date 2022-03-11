<template >
  <div class="container" @scroll="onScroll" >
    <HeaderApp />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderApp from './components/header-app.vue'


export default {
  name: 'App',
  components: {
    HeaderApp
  },
  data() {
    return {
      scrollPosition: 0
    }
  },
  methods: {
    onScroll(event) {
      console.log(1);
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
  height: 100%;
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
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;
}
</style>
