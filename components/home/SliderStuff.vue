<template>
  <section id="staffSlider">
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
            <b-card
              v-for="pers in staff"
              :key="pers.id"
              :title="pers.name"
              :img-src="pers.img"
              :img-alt="pers.name"
              img-top
              class="m-1"
            >
              <b-card-text>
                {{ pers.text }}
              </b-card-text>
              <b-button href="#" variant="primary">Подробнее</b-button>
            </b-card>
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderStaff',
  components: { VueSlickCarousel },
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
<style lang="sass">
.slider-wrapper
  padding: 0 !important
.slick-slide
  // margin: 0 15px
  padding: 0 15px
.slick-list
  // margin: 0 -15px !important
</style>
