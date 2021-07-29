<template lang="pug">
  section(class="benefits")
    div(class="container benefits__block")
      h2(class="benefits__title title") {{title}}
      div(class="benefits__list flex wrap")
        div(class="benefits__item flex column col-md-4 col-6" v-for="({icon, title, description}, index) of benefits" :key="index")
          div(class="benefits__item_card flex column aic")
            img(class="benefits__item_icon" :src="icon")
            h3(class="benefits__item_title") {{title}}
            p(class="benefits__item_description") {{description}}


</template>

<script>
  export default {
    name: "Benefits",
    data: () => ({
      title: "Преимущества даркстора",
      benefits: [
        {
          icon: require('../assets/icons/Groupapple-hand.svg'),
          title: 'Нет контакта с посторонними людьми',
          description: 'Заказ формируется из товаров, до которых никто не дотрагивался, как это возможно на полках обычного магазина. Фрукты и овощи отбираются сборщиком вручную.'
        },
        {
          icon: require('../assets/icons/Group 106frozen.svg'),
          title: 'Заморозка 1 раз',
          description: 'Продукты замораживаются однократно и поддерживаются в этом состоянии, пока не будут доставлены к вам.'
        },
        {
          icon: require('../assets/icons/Groupboxes.svg'),
          title: 'Профессиональные морозильные камеры',
          description: 'Товар хранится в промышленных холодильных и морозильных зонах с оптимальными температурными режимами для разных товаров: овощей, фруктов, масла и т. д.',
        },
        {
          icon: require('../assets/icons/Framemeat.svg'),
          title: 'Разделка мяса и рыбы под заказ',
          description: 'Мясо и рыба разделываются непосредственно для вас, а при транспортировке хранятся в специальных боксах с низкой температурой.',
        },
        {
          icon: require('../assets/icons/Groupbaget.svg'),
          title: 'Своя пекарня',
          description: 'Знак «Печём сами» на карточках товаров означает, что мы привезём вам свежеиспечённый тёплый хлеб.'
        },
        {
          icon: require('../assets/icons/Grouprunner.svg'),
          title: 'Работаем с 1995 года',
          description: 'Мы занимаемся продуктами с 1995 года — все процессы хранения и доставки отточены до мелочей.',
        },
      ]
    }),


  }
</script>

<style lang="sass">
  .benefits
    margin-top: 30px
    margin-bottom: 100px
    .benefits__list
      margin-left: -15px
      margin-right: -15px
      .benefits__item

        .benefits__item_card
          margin: 15px
          background-color: #fff
          border-radius: 10px
          padding: 30px 17px
          flex-grow: 1
          & > *
            text-align: center
            line-height: 1.5

  @media screen and (max-width: 768px)
    .benefits
      margin-bottom: 50px !important
    .benefits__title
      margin-bottom: 20px !important
      font-size: 26px !important

    .benefits__item_card
      padding: 20px 5px !important
      & > *,& h3
        font-size: 8px !important
    .benefits__item_icon
      height: 40px


</style>