<template>
  <div class="progress-bar">
    <div class="progress-bar_fill"></div>
  </div>
  <section class="form">
    <div class="form__title_background">
      <p class="form__title">В какое время суток Вы чувствуете себя наиболее комфортно?</p>
    </div>
    <form class="form__input form__input_time">
      <div class="radio">
        <input  type="radio" id="1" value="One" v-model="picked" />
        <label  :class="{ 'checked': isChecked('One') }" class="form__label" for="1">Утро</label>
      </div>
      <div class="radio">
        <input  type="radio" id="2" value="Two" v-model="picked" />
        <label :class="{ 'checked': isChecked('Two') }" class="form__label" for="2">Ночь</label>
      </div>
      <div class="radio">
        <input  type="radio" id="3" value="Three" v-model="picked" />
        <label :class="{ 'checked': isChecked('Three') }" class="form__label" for="3">Вечер</label>
      </div>
      <div class="radio">
        <input  type="radio" id="4" value="Four" v-model="picked" />
        <label :class="{ 'checked': isChecked('Four') }" class="form__label" for="4">День</label>
      </div>
    </form>
  </section>
  <button @click="$router.push('three')" class="button__next" type="submit" v-show="picked">
    Далее
  </button>
</template>


<script>
export default {

  name: "PageTwo",
  components: {
  },
  data() {
    return {
      picked: ''
    }
  },
  methods: {
    isChecked(value) {
      return this.picked.includes(value)
    },
  }
}
</script>

<style scoped>
.radio {
  margin: 30px 0 0 17px;
}
.radio:last-child {
  margin-bottom: 45px;
}
.form {
  width: 289px;
  background-color: #F3F4F8;
  margin: 0 auto;
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
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343B4D;
}
.form__input {
  width: 289px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.form__label {
  margin-left: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}
.checked {
  font-weight: 700;
  color: #315DFA;
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
  margin-left: 67px;
}
.button__next:hover {
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
  width: 26px;
  height: 8px;
  background: #B53E42;
}
</style>
