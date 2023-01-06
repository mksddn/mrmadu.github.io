<template>
  <section v-if="$store.state.lastNews">
    <b-container>
      <TitleSection title="Новости" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <SliderCarousel :slides="$store.state.lastNews" type="post" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionPosts',
  async fetch() {
    if (!this.$store.state.lastNews) {
      const { data: lastNews } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?per_page=4`
      )
      this.$store.commit('SET_LAST_NEWS', lastNews)
      // this.lastNews = lastNews
    }
  },
}
</script>
<style lang="sass" scoped></style>
