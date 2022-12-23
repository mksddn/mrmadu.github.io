<template>
  <section id="staffSlider">
    <b-container>
      <TitleSection title="Новости" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <VueSlickCarousel v-bind="settings">
            <CardPost
              v-for="post in posts"
              :key="post.id"
              :post="post"
            />
          </VueSlickCarousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'
import CardPost from '~/components/CardPost'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderPosts',
  components: { VueSlickCarousel, CardPost },
  data: () => ({
    posts: [],
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
      'https://mammae-clinic.ru/wp-json/wp/v2/posts'
    )
    this.$store.commit('SET_ARTICLES_TO_STATE', posts)
    this.posts = posts
  },
}
</script>
<style lang="sass" scoped></style>
