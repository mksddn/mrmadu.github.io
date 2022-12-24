<template>
  <div>
    <VueSlickCarousel v-if="type === 'post'" v-bind="settings">
      <CardPostSlider v-for="post in slides" :key="post.id" :post="post" />
    </VueSlickCarousel>
    <VueSlickCarousel v-else-if="type === 'staff'" v-bind="settings">
      <CardStaff v-for="post in slides" :key="post.id" :post="post" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    // type: this.slides[0].type,
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
