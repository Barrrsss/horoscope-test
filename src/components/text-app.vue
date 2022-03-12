<template>
  <section class="main">
    <h3 class="main__header">Узнайте, как 2021 год изменит жизнь каждого из нас!</h3>
    <p class="main__text">К сожалению, 2020 год принес нам немало неприятностей, даже откровенных проблем и несчастий.
      Не смотря на это, 3 знака зодиака очень скоро обретут долгожданное счастье! 2021 год затронет
      своими потрясениями каждого из нас.</p>
  </section>

</template>

<script>
export default {
  name: "text-app"
}
</script>

<style scoped>
  .main {
    width: 296px;
    margin: 10px 0 0 0;
  }
  .main__header {
    width: 100%;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    color: #315DF9;
    margin: 9px 0 0 0;
  }
  .main__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #343B4D;
    margin: 8px 0 12px 0;
  }
  @media screen and (min-width: 750px) and (max-width: 1920px) {
    .main {
      width: 623px;
    }
  }
</style>
