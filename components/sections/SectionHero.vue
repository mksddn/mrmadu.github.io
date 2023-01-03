<template>
  <div id="heroSlider">
    <!-- <b-skeleton-img v-if="loading"></b-skeleton-img> -->
    <b-carousel
      id="carousel-1"
      v-model="slideIndex"
      :interval="400000"
      controls
      indicators
      img-height="1000"
      background="#000"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="slide in $store.state.homePage.acf.slides"
        :key="slide.index"
        :img-src="slide.slide_img"
        class="slide"
      >
        <b-row class="h-100">
          <b-col col lg="6" class="ml-auto slide-item">
            <span class="slide-title">{{ slide.slide_title }}</span>
            <p class="slide-text">{{ slide.slide_text }}</p>
            <b-link v-if="slide.slide_link" :to="slide.slide_link" class="slide-btn btn btn-primary">{{
              slide.slide_btn
            }}</b-link>
          </b-col>
        </b-row>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'SliderHero',
  data() {
    return {
      slideIndex: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style lang="sass">
.dark #heroSlider
  img.img-fluid
    opacity: 0.5
    height: 100%
    vertical-align: middle
#heroSlider
  img.img-fluid
    opacity: 0.8
    height: 100%
    vertical-align: middle
  .slide
    // display: flex
    height: 380px
    .slide-item
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center
      height: 100%
    .carousel-caption
      // display: flex
      height: 100%
      // width: 100%
      bottom: 0
      align-items: center
      text-align: initial
      color: var(--text-light)
    .slide-title
      font-size: 2.5rem
      font-weight: bold
      line-height: 1
      margin-bottom: 1rem
      @media (max-width: 991px)
        font-size: 1.5rem
    .slide-text
      font-size: 1.1rem
      line-height: 1.2
      margin-bottom: 2rem
      @media (max-width: 991px)
        font-size: 1rem
    .slide-title, .slide-text
      text-shadow: 1px 1px 2px black, 0 0 5px black
    .slide-btn
      text-transform: lowercase
</style>
