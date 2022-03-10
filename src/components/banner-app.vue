<template>
  <section class="lead">
    <img class="lead__zodiac rotation" src="../../src/assets/images/zodiac.svg" alt="zodiac">
    <img class="lead__background" src="../../src/assets/images/background.svg" alt="zodiac">
  </section>
</template>

<script>
export default {
  name: "banner-app"
}
</script>

<style scoped>
.lead {
  width: 287px;
  height: 158px;
  position: relative;
  margin: 11px 0 0 16px;
}
.lead__zodiac {
  width: 146px;
  height: 160px;
  position: absolute;
  margin-left: 7px;
}
.lead__background {
  width: 287px;
  height: 158px;
  position: absolute;
  z-index: -1;
}
@keyframes rotate {
  0% {transform: rotate(30deg)}
  50% {transform: rotate(calc(30deg * -1))}
  100% {transform: rotate(30deg)}
}

.rotation {
  animation: rotate 5s ease-in-out infinite;
}
</style>
