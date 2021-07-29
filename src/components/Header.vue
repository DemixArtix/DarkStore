<template lang="pug">
  header(class="header")
    img(class="header__bg-image" :src="bgImage")
    div(class="container header__block")
      img(class="header__logo" :src="logo")
      h1(class="header__title") {{title}}
      p(class="header__description" v-html="description")
      div(class="header__swipe flex jcc aic")
        img(class="header__swipe_logo" :src="swipeLogo")
        span(class="header__swipe_text ") Свайп вниз
</template>

<script>
  export default {
    name: "Header",
    data:() => ({
      logo: require('../assets/icons/Frame.svg'),
      swipeLogo: require('../assets/icons/Groupswipe.svg'),
      bgImage: require('../assets/images/IMG_2039 1 shelves .jpg'),
      title: 'Что такое даркстор?',
      description: 'Это магазин-склад без покупателей.<br> Именно здесь, а не в розничном магазине собирают ваши заказы.'
    }),
  }
</script>

<style lang="sass">
  .header
    background-image: var(--gradient)
    position: relative
    margin-left: -100px
    margin-right: -100px
    border-radius: 0 0 100% 100% / 0 0 50% 50%
    margin-bottom: 65px

    & > *
      color: #fff
    .header__block
      padding-top: 60px
      padding-bottom: 30px
    .header__title
      margin-top: 125px
    .header__bg-image
      position: absolute
      width: 100%
      height: 100%
      left: 0
      top: 0
      z-index: -1
      object-fit: cover
      border-radius: 0 0 100% 100% / 0 0 50% 50%
    .header__description
      font-size: 26px
      line-height: 1.7
      width: 586px
      margin-bottom: 35px
    .header__swipe
      & > *
        padding: 5px

  @media screen and (max-width: 1024px)
    .header__block
      padding-left: 74px
    .header__title
      font-size: 40px !important
    .header__description
      font-size: 20px !important
      width: 374px !important

  @media screen and (max-width: 768px)
    .header__block
      padding-left: 0 !important
    .header__logo
      display: block
      margin: 0 auto
    .header__title
      margin: 0 auto 30px
      line-height: 1.3
      text-align: center
      font-size: 28px !important
      width: 180px
    .header__description
      max-width: 350px
      width: auto !important
      margin: 0 auto
      text-align: center
      font-size: 16px !important



</style>