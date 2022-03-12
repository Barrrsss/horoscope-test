<template>
  <div class="main">
    <div class="progress-bar">
      <div class="progress-bar_fill"></div>
    </div>
    <section class="form">
      <div class="form__title_background">
        <p class="form__title">
          Введите дату своего рождения:
        </p>
      </div>
      <form class="form__input form__input_time">
        <div class="form__selector">
          <select class="form__select" v-model="daySelected">
            <option class="form__option" v-for="item in days" :key="item.id">{{ item.day }}</option>
          </select>
          <select class="form__select" v-model="monthSelected">
            <option v-for="item in months" :key="item.id">{{ item.month }}</option>
          </select>
          <select class="form__select" v-model="yearSelected">
            <option v-for="item in years" :key="item.id">{{ item.year }}</option>
          </select>
        </div>
      </form>
      <div class="zodiac">
        <img class="zodiac-pic" v-show="Aquarius(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Aquarius.png" alt="Водолей">
        <img class="zodiac-pic" v-show="Aries(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Aries.png" alt="Овен">
        <img class="zodiac-pic" v-show="Cancer(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Cancer.png" alt="Рак">
        <img class="zodiac-pic" v-show="Capricorn(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Capricorn.png" alt="Козерог">
        <img class="zodiac-pic" v-show="Gemini(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Gemini.png" alt="Близнецы">
        <img class="zodiac-pic" v-show="Leo(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Leo.png" alt="Лев">
        <img class="zodiac-pic" v-show="Libra(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Libra.png" alt="Весы">
        <img class="zodiac-pic" v-show="Pisces(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Pisces.png" alt="Рыбы">
        <img class="zodiac-pic" v-show="Sagittarius(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Sagittarius.png" alt="Стрелец">
        <img class="zodiac-pic" v-show="Scorpio(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Scorpio.png" alt="Скорпион">
        <img class="zodiac-pic" v-show="Taurus(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Taurus.png" alt="Телец">
        <img class="zodiac-pic" v-show="Virgo(daySelected, monthSelected, yearSelected)" src="../../src/assets/images/Virgo.png" alt="Дева">
        <p class="zodiac-sign" v-show="Aquarius(daySelected, monthSelected, yearSelected)">Водолей</p>
        <p class="zodiac-sign" v-show="Aries(daySelected, monthSelected, yearSelected)">Овен</p>
        <p class="zodiac-sign" v-show="Cancer(daySelected, monthSelected, yearSelected)">Рак</p>
        <p class="zodiac-sign" v-show="Capricorn(daySelected, monthSelected, yearSelected)">Козерог</p>
        <p class="zodiac-sign" v-show="Gemini(daySelected, monthSelected, yearSelected)">Близнецы</p>
        <p class="zodiac-sign" v-show="Leo(daySelected, monthSelected, yearSelected)">Лев</p>
        <p class="zodiac-sign" v-show="Libra(daySelected, monthSelected, yearSelected)">Весы</p>
        <p class="zodiac-sign" v-show="Pisces(daySelected, monthSelected, yearSelected)">Рыбы</p>
        <p class="zodiac-sign" v-show="Sagittarius(daySelected, monthSelected, yearSelected)">Стрелец</p>
        <p class="zodiac-sign" v-show="Scorpio(daySelected, monthSelected, yearSelected)">Скорпион</p>
        <p class="zodiac-sign" v-show="Taurus(daySelected, monthSelected, yearSelected)">Телец</p>
        <p class="zodiac-sign" v-show="Virgo(daySelected, monthSelected, yearSelected)">Дева</p>
      </div>
      <div class="error" v-show="onerror(daySelected, monthSelected, yearSelected)">Пожалуйста, выберите ответ</div>
      <button @click="clickButton" class="button__next" type="submit" v-show="daySelected && monthSelected && yearSelected">
        Далее
      </button>
    </section>
  </div>

</template>


<script>
const days = [
    {"id": 1, "day": "1"}, {"id": 2, "day": "2"}, {"id": 3, "day": "3"}, {"id": 4, "day": "4"}, {"id": 5, "day": "5"},
    {"id": 6, "day": "6"}, {"id": 7, "day": "7"}, {"id": 8, "day": "8"}, {"id": 9, "day": "9"}, {"id": 10, "day": "10"},
    {"id": 11, "day": "11"}, {"id": 12, "day": "12"}, {"id": 13, "day": "13"}, {"id": 14, "day": "14"}, {"id": 15, "day": "15"},
    {"id": 16, "day": "16"}, {"id": 17, "day": "17"}, {"id": 18, "day": "18"}, {"id": 19, "day": "19"}, {"id": 20, "day": "20"},
    {"id": 21, "day": "21"}, {"id": 22, "day": "22"}, {"id": 23, "day": "23"}, {"id": 24, "day": "24"}, {"id": 25, "day": "25"},
    {"id": 26, "day": "26"}, {"id": 27, "day": "27"}, {"id": 28, "day": "28"}, {"id": 29, "day": "29"}, {"id": 30, "day": "30"}
]
const months = [
  {"id": 1, "month": "1"}, {"id": 2, "month": "2"}, {"id": 3, "month": "3"}, {"id": 4, "month": "4"}, {"id": 5, "month": "5"},
  {"id": 6, "month": "6"}, {"id": 7, "month": "7"}, {"id": 8, "month": "8"}, {"id": 9, "month": "9"}, {"id": 10, "month": "10"},
  {"id": 11, "month": "11"}, {"id": 12, "month": "12"}
]
const years = [
  {"id": 1, "year": "1900"}, {"id": 2, "year": "1901"}, {"id": 3, "year": "1902"}, {"id": 4, "year": "1903"}
]
export default {

  name: "PageSix",
  components: {
  },
  data() {
    return {
      days,
      months,
      years,
      daySelected: null,
      monthSelected: null,
      yearSelected: null
    }
  },
  methods: {
    clickButton() {
      this.$store.state.footer = false;
      this.$router.push('reg');
    },
    Aquarius (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 1 && daySelected >=21 || monthSelected == 2 && daySelected <=19)) return true
    },
    Aries (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 3 && daySelected >=21 || monthSelected == 4 && daySelected <=20)) return true
    },
    Cancer (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 6 && daySelected >=22 || monthSelected == 7 && daySelected <=22)) return true
    },
    Capricorn (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 12 && daySelected >=23 || monthSelected == 1 && daySelected <=20)) return true
    },
    Gemini (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 5 && daySelected >=22 || monthSelected == 6 && daySelected <=21)) return true
    },
    Leo (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 7 && daySelected >=23 || monthSelected == 8 && daySelected <=21)) return true
    },
    Libra (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 9 && daySelected >=24 || monthSelected == 10 && daySelected <=23)) return true
    },
    Pisces (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 2 && daySelected >=20 || monthSelected == 3 && daySelected <=20)) return true
    },
    Sagittarius (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 11 && daySelected >=23 || monthSelected == 12 && daySelected <=22)) return true
    },
    Scorpio (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 10 && daySelected >=24 || monthSelected == 11 && daySelected <=22)) return true
    },
    Taurus (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 4 && daySelected >=21 || monthSelected == 5 && daySelected <=21)) return true
    },
    Virgo (daySelected, monthSelected, yearSelected) {
      if ((daySelected) && (monthSelected) && (yearSelected) &&
          (monthSelected == 8 && daySelected >=22 || monthSelected == 9 && daySelected <=23)) return true
    },
    onerror (daySelected, monthSelected, yearSelected) {
      if ( (daySelected  === null && monthSelected  === null && yearSelected === null)
          ) {
        return false
            }
      else if (daySelected  === null || monthSelected  === null || yearSelected === null) {
        return true
      }
      else if (daySelected && monthSelected && yearSelected) {
        return false
      }
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
.form {
  width: 289px;
  background-color: #F3F4F8;
  margin: 0 auto;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form__select {
  width: 186px;
  height: 45px;
  margin-bottom: 15px;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  appearance: none;
  background: #FFFFFF url(../../src/assets/images/arrow.svg) 160px no-repeat;
  padding-right: 16px;
  cursor: pointer;
  color: #315DFA;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  padding-left: 17px;
}
.form__select:last-child {
  margin-bottom: 1px;
}
.form__selector {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 27px;
}
.form__title {
  width: 246px;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;

}
.form__title_background {
  width: 289px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343B4D;
}
.form__input {
  width: 289px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  --padding-x: 1.2em;
  margin-top: 13px;
}
.button__next:hover {
  cursor: pointer;
  background: #355ADF;
  border: 1px solid #315DFA;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
}

.progress-bar {
  width: 289px;
  height: 8px;
  background: #F3F4F8;
  box-shadow: inset 0 4px 2px rgba(0, 0, 0, 0.1);
  margin: 36px 0 25px 19px;
}
.progress-bar_fill {
  width: 289px;
  height: 8px;
  background: #B53E42;
}
.zodiac-pic {
  width: 81px;
  height: 82px;
}
.zodiac-sign {
  width: 81px;
  text-align: center;
  margin: 0;
  color: #000000;
  font-weight: 400;
  font-size: 10px;
  line-height: 22px;
}
.error {
  width: 233px;
  height: 36px;
  background: #FFD8CF;
  color: #D0060E;
  margin: 37px 0 0 0;
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 13px;
  line-height: 22px;
  justify-content: center;
}
</style>
