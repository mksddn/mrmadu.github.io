<template>
  <div>
    <TitlePage :title="pageInfo.title.rendered" />
    <section id="pageContent">
      <b-container>
        <b-row align-v="center">
          <b-col lg="6">
            <h2 class="doc-name">
              Эдуард <strong class="text-primary">Худоев</strong>
            </h2>
            <div class="doc-text">
              <font-awesome-icon icon="fa-solid fa-quote-left" />
              <p>
                «Клиника МАММЭ – дело всей моей жизни. Несколько лет назад,
                диагноз рак поставили моей матери. Тогда я на себе испытал все
                те эмоции и тяжелейшие переживания, с которыми сегодня ко мне
                приходят пациенты. Это ощущение единственного шанса спасти
                близкого человека, сделать правильный выбор и вернуть счастье в
                свою семью. За годы работы в клинике мне удалось собрать вместе
                сильнейших специалистов, провести оснащение клиники на
                совершенном на сегодняшний день уровне и донести до каждого
                сотрудника высшую цель нашей деятельности. Вместе мы победили
                болезнь моей матери, теперь я никогда не теряю веры в надежду и
                готов поддержать каждого, кто приходит в нашу клинику за
                помощью»
              </p>
            </div>
          </b-col>
          <b-col lg="6">
            <img
              src="https://mammae-clinic.ru/wp-content/uploads/2019/11/eduard-hudoev-vrach-dolzhen-uchitsya-vsegda-.jpg"
              alt="Эдуард Худоев"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="archive-staff">
      <b-container>
        <b-row>
          <b-col v-for="post in $store.state.allStaff" :key="post.id" xl="3" lg="4" sm="6">
            <CardStaff :post="post" />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Meta from '~/plugins/meta'
export default {
  mixins: [Meta],
  layout: 'post',
  async asyncData({ app, store, params }) {
    if (!store.state.allStaff) {
      const allStaff = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/staff?_embed&per_page=99`,
      )
      store.commit('SET_ALL_STAFF', allStaff.data)
    }
    const currPage = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?_embed&slug=staff`
    )
    store.commit('SET_PAGE_INFO', currPage.data[0])
    return { currPage: currPage.data[0] }
  },
  computed: {
    pageInfo() {
      return this.currPage
    },
    metaType() {
      return 'page'
    },
  },
}
</script>

<style lang="sass" scoped>
.doc-name
  font-weight: 300
  &:after
    content: ''
    display: block
    width: 60px
    height: 2px
    margin-top: 5px
    background-color: var(--primary)
.doc-text
  position: relative
  padding-left: 30px
  padding-top: 30px
  svg
    position: absolute
    left: 0
    top: -0
    font-size: 5rem
    color: #dadada
    z-index: -1
.archive-staff
  background-color: var(--bg-soft)
</style>
