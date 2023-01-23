<template>
  <div>
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
// import Meta from '~/plugins/meta'
export default {
  name: 'HomePage',
  // mixins: [Meta],
  layout: 'home',
  async asyncData({ app, store }) {
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
    // meta_title: this.homePage.yoast_head_json.og_title,
    // meta_descr: this.homePage.yoast_head_json.og_description,
    // meta_url: this.homePage.yoast_head_json.og_url,
    // meta_type: 'website',
    // meta_img: this.homePage.yoast_head_json.og_image[0],
  }),
  mounted() {
  },
}
</script>

<style lang="scss">
// @import 'static/custom.sass';
// @import '~bootstrap/scss/bootstrap.scss';
// @import '~bootstrap-vue/src/index.scss';
</style>
