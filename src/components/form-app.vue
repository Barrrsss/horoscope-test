<template>
  <section class="form">
    <div class="form__title_background">
      <p class="form__title">Укажите свой пол:</p>
    </div>
    <form class="form__input">
      <div>
        <input class="form__radio"  type="radio" id="1" value="One" v-model="picked" />
        <label  :class="{ 'checked': isChecked('One') }" class="form__label" for="1">Женщина</label>
      </div>
      <div>
        <input class="form__radio"  type="radio" id="2" value="Two" v-model="picked" />
        <label :class="{ 'checked': isChecked('Two') }" class="form__label" for="2">Мужчина</label>
      </div>
    </form>
  </section>
  <button @click="clickButton" class="button__next" type="submit" v-show="picked" >
    Далее
  </button>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "form-app",
  data() {
    return {
      picked: ''
    }
  },
  computed: mapState({
    footer: "footer",
  }),
  methods: {
    clickButton() {
      this.$store.state.footer = false;
      this.$router.push('two');
    },
    isChecked(value) {
      return this.picked.includes(value)
    }
  }
}
</script>

<style scoped>
  .form {
    width: 289px;
    background-color: #F3F4F8;
    margin: 0 auto;
  }
  .form__title {
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
  }
  .form__title_background {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #343B4D;
  }
  .form__input {
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .form__label {
    margin-left: 5px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
    cursor: pointer;
  }
  .form__radio {
    cursor: pointer;
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
  }
  .button__next:hover {
    cursor: pointer;
    background: #355ADF;
    border: 1px solid #315DFA;
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.35);
  }
  @media screen and (min-width: 750px) and (max-width: 1920px) {
    .form {
      width: 623px;
    }
  }
</style>
