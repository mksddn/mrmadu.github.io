<template>
  <section id="staffSlider">
    <b-container>
      <TitleSection title="Наши врачи" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <SliderCarousel :slides="posts" :type="posts[0].type" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionStaff',
  data: () => ({
    posts: [],
  }),
  async fetch() {
    const { data: posts } = await axios.get(
      'https://mammae-clinic.ru/wp-json/wp/v2/staff'
    )
    this.$store.commit('SET_ARTICLES_TO_STATE', posts)
    this.posts = posts
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
