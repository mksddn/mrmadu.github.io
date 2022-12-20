<template>
  <section id="staffSlider">
    <b-container>
      <TitleSection title="Наши врачи" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <VueSlickCarousel v-bind="settings">
            <CardStaff
              v-for="post in staff"
              :key="post.id"
              :title="post.title.rendered"
              :img="post.fimg_url"
              :desc="post.excerpt.rendered"
            />
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from "axios"
import VueSlickCarousel from 'vue-slick-carousel'
import CardStaff from '~/components/CardStaff'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderStaff',
  components: { VueSlickCarousel, CardStaff },
  data: () => ({
    staff: [],
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
  async fetch() {
    const { data: posts } = await axios.get(
      'https://mammae-clinic.ru/wp-json/wp/v2/staff'
    )
    this.staff = posts
  },
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
