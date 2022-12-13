<template>
  <VueSlickCarousel v-bind="settings">
    <img
      v-for="(img, index) in photos"
      :key="index"
      :src="img.src"
      :alt="img.alt"
    />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'SliderGallery',
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    title: 'Стационар',
    photos: [
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
    ],
    settings: {
      lazyLoad: 'ondemand',
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
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
