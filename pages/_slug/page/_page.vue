<template>
  <div>
    <TitlePage :title="title" type="post" />
    <ContentArchive :posts="posts" :totalpages="totalpages" />
  </div>
</template>

<script>
import Meta from '~/plugins/meta'
export default {
  mixins: [Meta],
  layout: 'post',
  async asyncData({ app, store, route }) {
    const tax = store.state.taxSlugs.find(
      (tax) => tax.slug === route.params.slug
    )
    const type = tax.type === 'category' ? 'categories' : 'tags'
    let taxInfo = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/${type}/${tax.id}`
    )
    taxInfo = taxInfo.data
    store.commit('SET_PAGE_INFO', taxInfo)
    let posts = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?_embed&${type}=${tax.id}&page=${route.params.page}`
    )
    const totalpages = posts.headers['x-wp-totalpages']
    posts = posts.data
    return {
      title: tax.name,
      taxInfo,
      posts,
      page: route.params.page,
      totalpages,
    }
  },
  data: () => ({
    title: null,
  }),
  computed: {
    pageInfo() {
      return this.taxInfo
    },
    metaTitle() {
      return `${this.taxInfo.yoast_head_json.title} | Стр. ${this.page}`
    },
  },
}
</script>

<style lang="sass"></style>
