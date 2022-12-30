<template>
  <section v-if="$store.state.lastArticles">
    <b-container>
      <TitleSection title="Новости" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <SliderCarousel :slides="$store.state.lastArticles" type="post" />
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
    if (!this.$store.state.lastArticles) {
      const { data: lastArticles } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?per_page=4`
      )
      this.$store.commit('SET_LAST_ARTICLES', lastArticles)
      // this.lastArticles = lastArticles
    }
  },
}
</script>
<style lang="sass" scoped></style>
