<template>
  <div class="main">
    <section class="final">
      <h4 class="final__title">Спасибо за Ваши ответы!</h4>
      <p class="final__subtitle">Поздравляем! Прослушать свой персональный гороскоп возможно уже сейчас!</p>
      <h4 class="final__title_text">2021 год Вас ошарашит!</h4>
      <p class="final__text">
        Вас ждёт то, чего Вы никак не ожидали. Первые известия Вы получите совсем скоро, возможно это 17-18 ноября!
      </p>
      <p class="final__text">
        Что бы прослушать аудио-сообщение, необходимо нажать на кнопку ниже и позвонить со своего мобильного телефона. Позвоните и прослушайте очень серьезную информацию!
      </p>
      <button @click="getApi()" class="button__next" type="submit">
        Звонить и слушать
      </button>
      <table v-show="hide"  class="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Birth year</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{people.name}}</td>
          <td>{{people.height}}</td>
          <td>{{people.mass}}</td>
          <td>{{people.birth_year}}</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>

</template>

<script>

export default {
  name: "FinalPage",
  data() {
    return {
      people: [],
      hide: false
    }
  },
  methods: {
    getApi() {
      this. hide= true
      fetch('https://swapi.dev/api/people/1/')
          .then(response => response.json())
          .then(json => {
              this.people = json

          })
    },
  },
}
</script>

<style scoped>
  .main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .final {
    width: 289px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 16px;
  }
  .final__title {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #343B4D;
    margin-top: 34px;
    margin-bottom: 0;
  }
  .final__subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #315DFA;
    margin-top: 19px;
    margin-bottom: 0;
  }
  .final__title_text {
    margin-top: 19px;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    color: #343B4D;
  }
  .final__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #343B4D;
    margin-top: 0;
    margin-bottom: 25px;
  }
  .button__next {
    width: 273px;
    height: 45px;
    border: 1px solid #315DFA;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin-top: 25px;
    background: #315DFA url(../../src/assets/images/phone.svg) no-repeat 16px;
  }
  .button__next:hover {
    cursor: pointer;
    background: #355ADF url(../../src/assets/images/phone.svg) no-repeat 16px;
    border: 1px solid #315DFA;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
  }
  .table{
    margin-top: 20px;
    border: 1px solid #eee;
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
    margin-left: -8px;
  }
  .table th {
    width: 100%;
    font-weight: bold;
    padding: 5px;
    background: #efefef;
    border: 1px solid #dddddd;
  }
  .table td{
    padding: 5px 10px;
    border: 1px solid #eee;
    text-align: left;
    font-size: 12px;
  }
  .table tbody tr:nth-child(odd){
    background: #fff;
  }
  .table tbody tr:nth-child(even){
    background: #F7F7F7;
  }
</style>
