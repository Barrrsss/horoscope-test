<template>
  <section class="form">
    <div class="form__title_background">
      <p class="form__title">Укажите свой пол:</p>
    </div>
    <form class="form__input">
      <div>
        <input  type="radio" id="1" value="One" v-model="picked" />
        <label  :class="{ 'checked': isChecked('One') }" class="form__label" for="1">Женщина</label>
      </div>
      <div>
        <input  type="radio" id="2" value="Two" v-model="picked" />
        <label :class="{ 'checked': isChecked('Two') }" class="form__label" for="2">Мужчина</label>
      </div>
    </form>

  </section>
</template>

<script>
export default {
  name: "form-app",
  data() {
    return {
      picked: ''
    }
  },
  methods: {
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
    width: 289px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #343B4D;
  }
  .form__input {
    width: 289px;
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
  }
  .checked {
    font-weight: 700;
    color: #315DFA;
  }
</style>
