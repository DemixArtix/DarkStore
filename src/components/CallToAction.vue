<template lang="pug">
  section(class="cta")
    div(class="cta__block container")
      div(class="cta__list flex jcb fcc-m")
        div(class="cta__item flex fcc-m" ref="items" v-for="({icon, title, description}, index) of list" :key="index")
          div(class="cta__icon")
            img(:src="icon")
          div(class="cta__text")
            h2(class="cta__title" v-html="title")
            p(class="cta__description" v-html="description")
      button(class="cta__button" @click="showPopup = true") К покупкам
    PopUp(v-if="showPopup" @closePopup="closePopup")



</template>

<script>
  import PopUp from "./PopUp";
  export default {
    name: "CallToAction",
    components: {PopUp},
    data: () => ({
      showPopup: false,
      list: [
        {
          icon: require('../assets/icons/Group 103coupon.svg'),
          title: 'Скидка <span>1500 ₽</span>',
          description: '<strong>–500 ₽</strong> на первые три заказа по промокоду NEW',
        },
        {
          icon: require('../assets/icons/Vectorcar.svg'),
          title: 'Бесплатная <span>доставка</span>',
          description: 'первого заказа',
        },
      ]
    }),
    mounted() {
      this.$refs.items.forEach((item, index) => {
        if(index < this.list.length - 1) {
          item.insertAdjacentHTML('afterend', '<div class="cta__plus"><span>+</span></div>')
        }
      })
    },
    methods: {
      closePopup(bool) {
        this.showPopup = bool
      }
    }
  }
</script>

<style lang="sass">
  .cta
    background-color: #fff
    .cta__block
      padding: 60px 20px 50px
      .cta__button
        width: 340px
        padding: 17px
        margin: 50px auto
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
      .cta__list
        align-items: stretch
        .cta__plus
          display: flex
          align-items: center
          justify-content: center
          span
            font-size: 36px
            font-weight: bold
        .cta__item
          width: 390px
          border: 1px solid #D0D4CD
          padding: 30px


          .cta__icon
            min-width: 70px
            height: 70px
            border-radius: 50%
            background-color: var(--light-green)
            display: flex
            align-items: center
            justify-content: center
            margin-right: 30px
            img
          .cta__text
            .cta__title
              font-size: 36px
              line-height: 1.3
              margin-top: 0
              margin-bottom: 11px
              span
                color: var(--light-green)
                display: block
            .cta__description
              line-height: 1.5

  @media screen and (max-width: 768px)
    .cta__list
      align-items: center !important
      & > *:not(:last-child)
        margin-bottom: 20px
      .cta__item
        align-items: center
        max-width: 390px
        width: auto !important
        .cta__icon
          min-width: 60px !important
          width: 60px !important
          height: 60px !important
          margin-right: 0 !important
          margin-bottom: 20px !important
        .cta__title
          font-size: 30px !important
          text-align: center !important
          span
            display: inline !important
        .cta__description
          text-align: center
          font-size: 14px



</style>