<template>
  <section id="staffSlider">
    <b-container>
      <BaseTitleSection title="Новости" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <VueSlickCarousel v-bind="settings">
            <CardPost
              v-for="post in posts"
              :key="post.id"
              :title="post.name"
              :img="post.img"
              :desc="post.text"
            />
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import CardPost from '~/components/CardPost'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderPosts',
  components: { VueSlickCarousel, CardPost },
  data: () => ({
    posts: [
      {
        id: '01',
        img: '/post.jpg',
        name: 'test 1',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '02',
        img: '/post.jpg',
        name: 'test 2',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '03',
        img: '/post.jpg',
        name: 'test 3',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '04',
        img: '/post.jpg',
        name: 'test 4',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '05',
        img: '/post.jpg',
        name: 'test 5',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '06',
        img: '/post.jpg',
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
            arrows: false,
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
<style lang="sass" scoped></style>
