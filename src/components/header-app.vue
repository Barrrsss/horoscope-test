<template>
  <header class="header">
    <h1 class="header__title">Новый гороскоп на 2021 год!</h1>
    <p class="header__subtitle">Узнайте, что вас ждёт.</p>
      </header>
</template>

<script>
export default {
  name: "header-app"
}
</script>

<style scoped>
  .header {
    width: 320px;
    background: #315DFA;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: 14px 0 0 21px;
    color: #AFDCE6;
  }
  .header__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 16px;
    text-transform: uppercase;
    margin: 0 auto;
  }
  .header__subtitle {
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    margin: 5px 0 0 0;
    padding-bottom: 6px;
  }
</style>
