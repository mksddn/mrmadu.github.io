<template>
  <section id="staffSlider">
    <b-container>
      <TitleSection title="Новости" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <SliderCarousel :slides="lastArticles" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'SectionPosts',
  async asyncData({ app, store, params }) {
    if (!store.state.lastArticles) {
      const lastArticles = await app.$axios.get(
        `https://mammae-clinic.ru/wp-json/wp/v2/posts`,
        {
          params: {
            _embed: true,
          },
        }
      )
      store.commit('SET_LAST_ARTICLES', lastArticles.data)
      // return lastArticles
    }
  },
  data: () => ({
    // posts: [],
  }),
  // async fetch() {
  //   const { data: posts } = await axios.get(
  //     'https://mammae-clinic.ru/wp-json/wp/v2/posts'
  //   )
  //   this.$store.commit('SET_ARTICLES_TO_STATE', posts)
  //   this.posts = posts
  // },
}
</script>
<style lang="sass" scoped></style>
