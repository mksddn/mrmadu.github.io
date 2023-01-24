<template>
  <div>
    <TitlePage
      :title="pageInfo.title.rendered"
      btn-link="/"
      btn-text="скачать прейскурант на услуги клиники"
    />
    <section id="pageContent">
      <b-container>
        <b-row no-gutters>
          <b-col v-for="serv in $store.state.services" :key="serv.id" lg="4">
            <CardService :serv="serv" />
          </b-col>
        </b-row>
        <br />
        <hr />
        <br />
        <b-row>
          <b-col>
            <p>
              Задача нашей клиники — индивидуальное решение каждого случая
              заболевания. Мы привлекаем специалистов, прошедших целый ряд
              образовательных программ в лучших маммологических центрах России и
              за рубежом. Благодаря оборудованию результаты лабораторных
              исследований приходят в кратчайшие сроки. Экономические программы
              позволяют нам оказывать полный спектр услуг, который по стоимости
              ниже аналогичных предложений как частных клиник, так и
              государственных учреждений России.
            </p>
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
  async asyncData({ app, store }) {
    if (!store.state.services) {
      const services = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?_embed&parent=0&per_page=99`
      )
      store.commit('SET_SERVICES', services.data)
    }
    const currPage = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?&slug=uslugi`
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
  background-color: #f1f1f1
</style>
