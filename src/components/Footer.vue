<template lang="pug">
  footer(class="footer")
    div(class="footer__block container")
      div(class="footer__logo") 
        img(:src="logo")
      div(class="footer__contacts flex jcb fcc-m")
        div(class="footer__phone_list flex fcc-m")
          div(class="footer__phone_item" v-for="({city, number}) of phoneList")
            div(class="footer__phone_city") {{city}}
            a(class="footer__phone_number" :href="'tel:' + number") {{number}}
        div(class="footer__social_list flex aic")
          div(class="footer__social_item" v-for="({href, icon}) of socialList")
            a(class="footer__social_link" :href="href")
              img(class="footer__social_icon" :src="icon")

</template>

<script>
  export default {
    name: "Footer",
    data: () => ({
      logo: require('../assets/icons/Framefooter logo.svg'),
      phoneList: [
        {
          city: 'Москва',
          number: '+7 495 797-57-77',
        },
        {
          city: 'Санкт-Петербург',
          number: '+7 812 385-99-55',
        },
      ],
      socialList: [
        {
          href: '#',
          icon: require('../assets/icons/Vectorfb.svg'),
        },
        {
          href: '#',
          icon: require('../assets/icons/Vectorvk.svg'),
        },
        {
          href: '#',
          icon: require('../assets/icons/ininsta.svg'),
        },
        {
          href: '#',
          icon: require('../assets/icons/ok.svg'),
        },
      ]
    })

  }
</script>

<style lang="sass">
.footer
  background-color: var(--dark-green)
  padding-top: 45px
  padding-bottom: 110px
  margin-bottom: 42px
  & > *
    color: #fff
  .footer__logo
    margin-bottom: 15px
  .footer__contacts
    .footer__phone_list
      .footer__phone_item
        &:not(:last-child)
          margin-right: 40px
        .footer__phone_city
          font-size: 14px
          line-height: 2.6rem
        .footer__phone_number
          font-size: 22px
          line-height: 1.6rem
          font-weight: bold
          color: #fff
    .footer__social_list
      .footer__social_item
        border-radius: 50%
        &:not(:last-child)
          margin-right: 40px

        .footer__social_link

@media screen and (max-width: 1024px)
  .footer
    margin-bottom: 0

@media screen and (max-width: 768px)
  .footer
    padding-bottom: 75px
  .footer__block
    padding: 0 40px
  .footer__contacts
    & > *:not(:last-child)
      margin-bottom: 20px

</style>