<template>
  <div class="main">
    <section class="registration">
      <h3 class="reg__title">
        Обработка Ваших данных:
      </h3>
      <div class="progress-bar">
        <div class="progress-bar__fill" :style="widthFunc()">
          <div class="progress-bar__text" :style="widthFunc()">{{ progress }}%</div>
        </div>

      </div>
      <ul class="data__processing">
        <li class="data__step">Анализ введенных данных . . . . . . .
        </li>
        <li>
          <span v-show="progress>15" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=15" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
        <li class="data__step">Коррекция астрологического знака
        </li>
        <li>
          <span v-show="progress>30" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=30" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
        <li class="data__step">Расчет вариаций ответов . . . . . . . . .
        </li>
        <li>
          <span v-show="progress>45" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=45" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
        <li class="data__step">Генерация предсказания . . . . . . . . .
        </li>
        <li>
          <span v-show="progress>60" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=60" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
        <li class="data__step">Сохранение результата . . . . . . . . . . .
        </li>
        <li>
          <span v-show="progress>70" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=70" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
        <li class="data__step">Поиск свободного оператора . . . . .
        </li>
        <li>
          <span v-show="progress>80" class="data__status data__status_complete">Выполнено</span>
          <span v-show="progress<=80" class="data__status data__status_uncompleted">Не выполнено</span>
        </li>
      </ul>
      <div class="data__audio">Начало озвучки и записи аудио-сообщения . . . . . . .
      </div>
      <div v-show="progress<100" class="data__record data__status_uncompleted">
        Идёт запись!
      </div>
      <div v-show="progress===100" class="data__record data__status_complete">
        Готово!
      </div>
      <button @click="clickButton" class="button__next" type="submit" v-show="progress===100">
        Далее
      </button>
    </section>
  </div>
</template>

<script>

export default {
  name: "RegistrationNew",
  components: {
  },

  data() {
    return {
      progress: 0,
      progressFull: null,
    }
  },
  mounted() {
    this.startProgress()
  },
  unmounted() {
    this.stopProgress()
  },
  methods: {
    clickButton() {
      this.$store.state.footer = false;
      this.$router.push('final');
    },
    widthFunc() {
      let width = this.progress *2.89;
      return {
        '--width': width  + 'px'
      };
    },
    startProgress() {
      this.progressFull = setInterval(() => {
        this.progress++
      }, 50)
    },
    stopProgress() {
      clearTimeout(this.progressFull)
    },
  },
  watch: {
    progress(time) {
      if (time === 100) {
        this.stopProgress()
      }
    }
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
  .data__processing {
    list-style-type: none;
    padding: 0;
    color: #343B4D;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: grid;
    grid-template-columns: 210px 100px;
    grid-gap: 5px;
  }
  .data__record {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    margin-top: 25px;
  }
  .data__audio {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #343B4D;
  }
  .data__status_complete {
    color: #419330;
  }
  .data__status_uncompleted {
    color: #D0060E;
  }
  .registration {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 16px;
  }
  .progress-bar {
    width: 289px;
    height: 42px;
    background: #F3F4F8;
  }
  .progress-bar__fill {
    width: var(--width);
    height: 42px;
    background: #419330;
    position: relative;
  }
  .progress-bar__text {
    position: absolute;
    top: 25%;
    left: 45%;
    z-index: 3;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #FFFFFF;
  }
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
    margin-top: 25px;
    margin-left: 51px;
  }
  .button__next:hover {
    cursor: pointer;
    background: #355ADF;
    border: 1px solid #315DFA;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
  }


</style>
