<template>
  <div id="heroSlider">
    <b-carousel
      id="carousel-1"
      v-model="slideIndex"
      :interval="4000"
      controls
      indicators
      img-height="1000"
      background="#000"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- <b-skeleton-img v-if="sceleton"></b-skeleton-img> -->
      <b-carousel-slide
        v-for="(slide, index) in slider"
        :key="index"
        :img-src="slide.img"
        class="slide"
      >
        <!-- <div class="slide-overlay"></div> -->
        <b-row>
          <b-col col lg="6" class="ml-auto">
            <span class="slide-title">{{ slide.title }}</span>
            <p class="slide-text">{{ slide.text }}</p>
            <a :href="slide.link" class="slide-btn btn btn-primary">{{
              slide.btn
            }}</a>
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
      slider: [
        {
          img: '/slide1.jpg',
          title: 'Внимание!',
          text: 'Открыт набор на курс «Когнитивно-поведенческая терапия ожирения» под кураторством врача-эндокринолога клиники МАММЭ Зоз Натальи Леонидовны.',
          btn: 'Подробнее',
          link: '/',
        },
        {
          img: '/slide2.jpg',
          title: 'Внимание!',
          text: 'Открыт набор на курс «Когнитивно-поведенческая терапия ожирения» под кураторством врача-эндокринолога клиники МАММЭ Зоз Натальи Леонидовны.',
          btn: 'Подробнее',
          link: '/',
        },
      ],
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
#heroSlider
  // .slide-overlay
  //   position: absolute
  //   width: 100%
  //   height: 100%
  //   left: 0
  //   top: 0
  //   background-color: #000
  img.img-fluid
    opacity: 0.7
    height: 100%
    vertical-align: middle
  .slide
    // display: flex
    height: 400px
    .carousel-caption
      display: flex
      height: 100%
      bottom: 0
      align-items: center
      text-align: initial
    .slide-title
      font-size: 2.5rem
      font-weight: bold
    .slide-text
      font-size: 1.1rem
      line-height: 1.2
    .slide-title, .slide-text
      text-shadow: 1px 1px 2px black, 0 0 5px black
</style>
