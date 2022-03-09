<template>
  <header class="header">
    <h1 class="header__title">Новый гороскоп на 2021 год!</h1>
    <h2 class="header__subtitle">Узнайте, что Вас ждёт.</h2>
      </header>
</template>

<script>
export default {
  name: "header-app"
}
</script>

<style scoped>
  .header {
    width: 1920px;
    height: 65px;
    background: #315DFA;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  }
  .header__title {
    font-weight: bold;
    font-size: 17px;
    line-height: 22px;
    text-transform: uppercase;
    color: #AFDCE6;
  }
  .header__subtitle {

  }
</style>
