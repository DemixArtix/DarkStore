<template lang="pug">
  section(class="steps")
    div(class="steps__block container")
      h2(class="steps__title title") {{title}}

      div(class="steps__slider")
        button(class="steps__slider_button prev" v-if="windowWidth > 768" @click="prevSlide")
        div(class="steps__slider_container")
          div(class="steps__slider_screen" ref="screen")
            div(class="steps__slider_item" v-for="({image, title, description}, index) of slides" :key="index")
              div(class="steps__slider_card")
                img(class="steps__slider_image" :src="image")
                h3(class="steps__slider_title") {{title}}
                p(class="steps__slider_description") {{description}}
        button(class="steps__slider_button next" v-if="windowWidth > 768" @click="nextSlide")
      div(class="steps__slider_mobile flex jcc")
        button(class="steps__slider_button prev" v-if="windowWidth <= 768" @click="prevSlide")
        button(class="steps__slider_button next" v-if="windowWidth <= 768" @click="nextSlide")
</template>

<script>
  export default {
    name: "Steps",
    data:() => ({
      title: 'Взгляните на процесс сборки своими глазами',
      slides: [
        {
          image: require('../assets/images/image1 1one.jpg'),
          title: 'Привезём точно по списку',
          description: 'Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа',
        },
        {
          image: require('../assets/images/image5 1two.jpg'),
          title: 'Собираем быстро и эффективно',
          description: 'Для улучшения эргономики пространства товары размещены от тяжëлых к лëгким, находящимся уже в конечной зоне упаковки.',
        },
        {
          image: require('../assets/images/image6 1three.jpg'),
          title: 'За свежесть и качество отвечаем',
          description: 'Выделены специальные зоны, в том числе холодная и морозильная.',
        },
        {
          image: require('../assets/images/image2 1four.jpg'),
          title: 'Шампунь не положат рядом с рыбой',
          description: 'Собираем и упаковываем ваш заказ с заботой: соблюдаем принципы товарного соседства и учитываем вес товара.',
        },
        {
          image: require('../assets/images/image3 1five.jpg'),
          title: 'Довезëм в сохранности даже яйца',
          description: 'Бережно транспортируем контейнеры, фиксируя их стяжными ремнями. Системы охлаждения поддерживают температурный режим.',
        },
      ],
      showSlide: 0,
      translateX: 0,
      itemWidth: 640 + 30,
      windowWidth: null
    }),
    created() {
      this.checkWindowHeight();
      window.addEventListener("resize", this.checkWindowHeight)
    },
    mounted() {
      setTimeout(this.nextSlide(), 3000)
    },
    methods: {
      checkWindowHeight() {
        console.log(window.innerWidth);
        console.log(window.scrollY);
        if(window.innerWidth <= 768) {
          this.itemWidth = 300
        } else {
          this.itemWidth = 670
        }
        this.windowWidth = window.innerWidth
      },
      prevSlide() {
        this.showSlide === 0 ? this.showSlide = this.slides.length - 1  : this.showSlide--;
        this.moveSlider();
      },
      nextSlide() {
        this.showSlide === this.slides.length - 1 ? this.showSlide = 0 : this.showSlide++;
        this.moveSlider();
      },
      moveSlider() {
        const screen = this.$refs.screen;
        screen.style.transform = `translateX(${-this.itemWidth * this.showSlide}px)`;

      },
    },
    watch: {
      showSlide: function () {
        const initSlide = this.showSlide;
        setTimeout(() => {
          if(initSlide === this.showSlide) this.nextSlide();
        } ,3000)
      }
    }
  }
</script>

<style lang="sass">
  .steps
    margin-top: 30px
    margin-bottom: 80px
    .steps__title
      width: 600px
    .steps__slider
      display: flex
      justify-content: center

      .steps__slider_container
        overflow: hidden
        width: calc(640px + 30px)


        .steps__slider_screen
          display: flex
          transition: 1s

          .steps__slider_item
            min-width: calc(640px + 30px)
            .steps__slider_card
              background-color: #fff
              padding: 40px
              border-radius: 10px
              margin: 30px 15px
              height: 450px
              box-sizing: border-box
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1)
              .steps__slider_image
                width: 100%
    .steps__slider_button
      cursor: pointer
      position: relative
      border: none
      background-color: transparent
      padding: 30px
      &:hover
        &:after,&:before
          background-color: darken(#D0D4CD, 30%)
      &:after,&:before
        content: ''
        position: absolute
        left: 50%

        transform: translate(-50%, -50%)
        height: 3px
        width: 20px
        background-color: #D0D4CD
        border-radius: 5px
      &:after
        top: calc(50% - 6px)
        transform: rotate(45deg)
      &:before
        top: calc(50% + 6px)
        transform: rotate(-45deg)
      &.prev
        transform: rotate(180deg)

  @media screen and (max-width: 768px)
    .steps__title
      width: auto !important
      margin-bottom: 20px !important
      font-size: 26px !important
    .steps__slider_container
      width: calc(280px + 20px) !important
      .steps__slider_screen
        .steps__slider_item
          min-width: calc(280px + 20px) !important
          .steps__slider_card
            height: 350px !important
            padding: 20px !important
            .steps__slider_image
            .steps__slider_title,.steps__slider_description
              font-size: 14px
    .steps__slider_mobile


</style>