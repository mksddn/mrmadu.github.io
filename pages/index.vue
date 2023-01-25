<template>
  <div v-if="$route.query.s">
    <SearchResults :key="$route.query.s" :query="$route.query.s" />
  </div>
  <div v-else>
    <SectionHero />
    <SectionAbout />
    <SectionCTA
      form
      img-btm
      title="Запишитесь на прием!"
      btn-text="Записаться на прием"
    />
    <div class="bg-image">
      <SectionServices />
    </div>
    <SectionStaff />
    <SectionPosts />
    <SectionCreed />
    <SectionReviews />
    <SectionCTA
      form
      img-btm
      title="Запишитесь на прием!"
      btn-text="Записаться на прием"
      img-src="doc1.png"
    />
    <SectionFAQ />
    <div class="bg-pattern">
      <SectionFeats />
    </div>
    <SectionCTA
      title="Хотите получить скидку на услуги?"
      subtitle="У нас есть специальная дисконтная программа"
      btn-text="Узнать больше"
      btn-link="/"
      img-src="cards.png"
    />
    <SectionContacts />
    <SectionAddinfo />
  </div>
</template>

<script>
import Meta from '~/plugins/meta'
export default {
  name: 'HomePage',
  mixins: [Meta],
  layout: 'home',
  async asyncData({ app, store, query }) {
    if (!store.state.homePage) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages/779`
      )
      store.commit('SET_HOME_PAGE', data)
      return { homePage: data }
    }
  },
  data: () => ({
    homePage: null,
  }),
  computed: {
    pageInfo() {
      return this.homePage
    },
    metaType() {
      return 'website'
    },
  },
  mounted() {},
}
</script>

<style lang="sass"></style>
