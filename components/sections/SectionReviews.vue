<template>
  <section id="reviewsSlider">
    <b-container>
      <TitleSection title="Отзывы" btn-link="/" />
      <b-row>
        <b-col>
          <VueSlickCarousel v-bind="settings">
            <CardReview
              v-for="(review, index) in reviews"
              :key="index"
              :text="review.text"
              :author="review.author"
            />
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
  name: 'SliderReviews',
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    reviews: [
      {
        text: 'Хочу поблагодарить Анатолия Петровича за высокий профессионализм. А самое главное, за неравнодушное, доброе и внимательное отношение к человеку. Очень помогло его чувство юмора и поддержка. Спасибо огромное. Бабенко Наталья.',
        author: 'С сайта «ПроДокторов»',
      },
      {
        text: 'Хочу поблагодарить Анатолия Петровича за высокий профессионализм. А самое главное, за неравнодушное, доброе и внимательное отношение к человеку. Очень помогло его чувство юмора и поддержка. Спасибо огромное. Бабенко Наталья.',
        author: 'С сайта «ПроДокторов»',
      },
      {
        text: 'Хочу поблагодарить Анатолия Петровича за высокий профессионализм. А самое главное, за неравнодушное, доброе и внимательное отношение к человеку. Очень помогло его чувство юмора и поддержка. Спасибо огромное. Бабенко Наталья.',
        author: 'С сайта «ПроДокторов»',
      },
      {
        text: 'Хочу поблагодарить Анатолия Петровича за высокий профессионализм. А самое главное, за неравнодушное, доброе и внимательное отношение к человеку. Очень помогло его чувство юмора и поддержка. Спасибо огромное. Бабенко Наталья.',
        author: 'С сайта «ПроДокторов»',
      },
      {
        text: 'Хочу поблагодарить Анатолия Петровича за высокий профессионализм. А самое главное, за неравнодушное, доброе и внимательное отношение к человеку. Очень помогло его чувство юмора и поддержка. Спасибо огромное. Бабенко Наталья.',
        author: 'С сайта «ПроДокторов»',
      },
    ],
    settings: {
      lazyLoad: 'ondemand',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      touchThreshold: 5,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    },
  }),
}
</script>

<style lang="sass" scoped></style>
