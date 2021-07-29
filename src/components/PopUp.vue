<template lang="pug">
  div(class="popup flex aic jcc" ref="popup" @click="onClosePopup")
    div(class="popup__block  flex aic jcc" @click.stop)
      button(class="popup__close" @click="onClosePopup")
      form(class="popup__form" @submit.prevent="sendEmail" v-if="status === 'beforeSend'")
        label(for="email" class="popup__label") Введите ваш email
        input(
          class="popup__input"
          :class="[$v.email.$dirty && $v.email.$invalid ? 'is-invalid' : $v.email.$dirty && !$v.email.$invalid ? 'is-valid' : '']"
          id="email"
          v-model="email"
          @blur="$v.email.$touch()"
          type="email")
        div(
          class="popup__message"
          v-if="!$v.email.email && $v.email.$dirty"
        ) Должен быть в формате mail@mail.com
        div(
          class="popup__message"
          v-if="!$v.email.required && $v.email.$dirty"
        ) Обязательно для ввода
        div(
          class="popup__message"
          v-if="!$v.email.maxLength && $v.email.$dirty"
        ) Максимальный размер 254 символа
        button(class="popup__button" type="submit") отправить заявку
      svg(class="popup__loader" v-if="status === 'dispatch'")
        circle(cx="35" cy="35" r="35")
      div(class="popup__congratulations" v-if="status === 'sent'")
        h2 Заявка отправлена
        h3 спасибо за заказ

</template>

<script>
  import { email, required, maxLength } from 'vuelidate/lib/validators';

  export default {
    name: "PopUp",
    data:() => ({
      email: '',
      status: 'beforeSend'
    }),
    validations: {
      email: {
        email,
        required,
        maxLength: maxLength(254),
      },
    },
    mounted() {
      this.$refs.popup.style.top = window.scrollY + 'px';
      document.body.style.overflow = 'hidden';
    },
    beforeDestroy() {
      document.body.style.overflow = 'auto';
    },
    methods: {
      sendEmail() {
        if(this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        this.status = 'dispatch';
        setTimeout(() => {
            this.status = 'sent';
            console.log({'success': true, status: 201, email: this.email});
          setTimeout(() => {
            this.onClosePopup()
          }, 3000)
        }, 3000)
      },
      onClosePopup() {
        this.$emit('closePopup', false)
      }
    }
  }
</script>

<style lang="sass">
body
  position: relative


.popup
  position: absolute
  left: 0
  top: 0
  height: 100vh
  width: 100%
  background-color: rgba(#000, .5)
  .popup__block
    position: relative
    width: 600px
    height: 400px
    border-radius: 10px
    background-color: #fff
    margin: 10px
    padding: 20px
    box-shadow: 0 0 10px 5px rgba(#000, .3)

  .popup__label
    display: block
    margin-bottom: 10px
    font-size: 22px
    color: var(--light-green)
  .popup__input
    border-radius: 5px
    padding: 10px 5px
    font-size: 22px
    border: 2px solid var(--light-green)

.is-invalid
  border-color: rgba(red, .7) !important
  box-shadow: 0 0 5px 3px rgba(red, .5)
  outline: none

.is-valid
  border-color: rgba(green, .7)
  box-shadow: 0 0 5px 3px rgba(green, .5)
  outline: none

.popup__message
  color: #ff0000
  font-size: 13px
  margin-top: 5px

.popup__button
  padding: 17px
  margin: 15px auto 10px
  display: block
  color: #fff
  background-color: var(--light-green)
  border-radius: 10px
  border: none
  transition: .5s
  font-size: 22px
  font-weight: bold
  &:hover
    background-color: darken(#7DB945, 5%)

.popup__close
  position: absolute
  width: 40px
  height: 40px
  right: -20px
  top: -20px
  border-radius: 50%
  background-color: var(--light-green)
  box-shadow: 0 0 5px 5px rgba(#000, .3)
  transition: .5s
  &:hover
    background-color: lighten(#7DB945, 10%)
  &:before,&:after
    content: ''
    position: absolute
    left: 50%
    top: 50%

    height: 4px
    width: 20px
    background-color: #fff
    border-radius: 5px
  &:before
    transform: translate(-50%, -50%) rotate(-45deg)
  &:after
    transform: translate(-50%, -50%) rotate(45deg)



.popup__loader
  position: relative
  width: 80px
  height: 80px
  animation: rotate 2s linear infinite
  circle
    width: 100%
    height: 100%
    fill: none
    stroke-width: 8
    stroke: var(--light-green)
    transform: translate(5px, 5px)
    stroke-linecap: round
    stroke-dasharray: 240
    stroke-dashoffset: 240
    animation: animate 4s linear infinite

@keyframes animate
  from,to
    stroke-dashoffset: 240
  50%
    stroke-dashoffset: 0
  50.1%
    stroke-dashoffset: 480

@keyframes rotate
  from
    transform: rotate(0)
  to
    transform: rotate(360deg)

.popup__congratulations
  h3,h2
    text-align: center
  h3
    color: var(--light-green)
    font-size: 22px !important

@media screen and (max-width: 768px)
  .popup__block
    height: 400px !important

</style>