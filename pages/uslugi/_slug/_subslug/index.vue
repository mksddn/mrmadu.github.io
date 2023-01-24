<template>
  <ContentServices :curr-serv="currServ" />
</template>

<script>
import Meta from '~/plugins/meta'
export default {
  mixins: [Meta],
  layout: 'post',
  async asyncData({ app, store, params, route }) {
    if (
      !store.state.currServ ||
      route.params.subslug !== store.state.currServ.slug
    ) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?_embed&slug=${params.subslug}`,
      )
      store.commit('SET_CURR_SERV', data[0])
      return { currServ: data[0] }
    }
  },
  computed: {
    pageInfo() {
      return this.currServ
    },
  },
}
</script>

<style lang="sass" scoped></style>
