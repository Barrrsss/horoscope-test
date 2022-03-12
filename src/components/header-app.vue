<template>
  <header @click="$router.push('/')" class="header">
    <div>
      <h1 class="header__title">Новый гороскоп на 2021 год!</h1>
      <p class="header__subtitle">Узнайте, что вас ждёт.</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-app"
}
</script>

<style scoped>
  .header {
    flex: 0 0 auto;
    width: 320px;
    background: #315DFA;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding: 14px 0 0 0;
    color: #AFDCE6;
    cursor: pointer;
    justify-content: flex-start;
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
  @media screen and (max-width: 1920px) {
    .header {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
