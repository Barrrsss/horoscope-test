<template>
  <button class="button__next">
    Далее
  </button>
</template>

<script>
export default {
  name: "button-next"
}
</script>

<style scoped>
.button__next {
  width: 186px;
  height: 45px;
  background: #315DFA;
  border: 1px solid #315DFA;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  --padding-x: 1.2em;
  margin-top: 13px;
  margin-left: 67px;
}
.button__next:hover {
  background: #355ADF;
  border: 1px solid #315DFA;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
}
</style>
