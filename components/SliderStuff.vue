<template>
  <section id="staffSlider" class="bg">
    <b-container>
      <b-row>
        <b-col>
          <BaseTitle title="Наши врачи" />
        </b-col>
        <b-col class="text-right">
          <a href="/" class="btn btn-primary">смотреть все</a>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="slider-wrapper">
          <VueSlickCarousel v-bind="settings">
            <CardStaff
              v-for="pers in staff"
              :key="pers.id"
              :title="pers.name"
              :img="pers.img"
              :desc="pers.text"
            />
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import CardStaff from '~/components/CardStaff'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderStaff',
  components: { VueSlickCarousel, CardStaff },
  data: () => ({
    staff: [
      {
        id: '01',
        img: '/doc.jpg',
        name: 'test 1',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '02',
        img: '/doc.jpg',
        name: 'test 2',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '03',
        img: '/doc.jpg',
        name: 'test 3',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '04',
        img: '/doc.jpg',
        name: 'test 4',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '05',
        img: '/doc.jpg',
        name: 'test 5',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '06',
        img: '/doc.jpg',
        name: 'test 6',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
    ],
    settings: {
      lazyLoad: 'ondemand',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
  }),
}
</script>
<style lang="sass" scoped>
section
  background-color: #f1f1f1
.slider-wrapper
  padding: 0 !important
.slick-slide
  // margin: 0 15px
  padding: 0 15px
.slick-list
  // margin: 0 -15px !important
</style>
