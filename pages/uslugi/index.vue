<template>
  <div>
    <TitlePage
      :title="title"
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
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'page',
  async asyncData({ app, store, params }) {
    if (!store.state.services) {
      const services = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=0&per_page=99`,
        {
          params: {
            _embed: true,
          },
        }
      )
      store.commit('SET_SERVICES', services.data)
    }
  },
  data: () => ({
    title: 'Услуги и цены',
  }),
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
    background-color: $primary
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
