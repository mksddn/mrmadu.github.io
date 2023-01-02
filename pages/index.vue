<template>
  <div>
    <SectionHero :slides="homePage.acf.slides" :loading="sliderLoading" />
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
export default {
  name: 'HomePage',
  layout: 'home',
  async asyncData({ app, store, params, route }) {
    if (!store.state.homePage) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages/779`,
        {
          params: {
            _embed: true,
          },
        }
      )
      store.commit('SET_HOME_PAGE', data)
      return { homePage: data, sliderLoading: false }
    }
  },
  // data: () => ({
  //   sliderLoading: true,
  // }),
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
