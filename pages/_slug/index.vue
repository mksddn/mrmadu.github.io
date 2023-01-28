<template>
  <ContentPost v-if="post && type === 'post'" :post="post" />
  <ContentPage v-else-if="post && type === 'page'" :post="post" />
</template>

<script>
import Meta from '~/plugins/meta'
export default {
  mixins: [Meta],
  layout: 'post',
  async asyncData({ app, store, params, redirect, error }) {
    // GET SLUG FROM URL
    const slug = params.slug
    // IF IS PAGE
    if (store.state.pageSlugs.includes(slug)) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?_embed&slug=${slug}`
      )
      if (data[0]) {
        store.commit('SET_PAGE_INFO', data[0])
        return { post: data[0], type: 'page' }
      } else {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    // ELSE IF IS ARCHIVE
    else if (store.state.taxSlugs.some((tax) => tax.slug === slug)) {
      redirect(`/${slug}/page/1`)
    }
    // ELSE (MOST LIKELY IS POST)
    else {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?_embed&slug=${slug}`
      )
      if (data[0]) {
        store.commit('SET_PAGE_INFO', data[0])
        return { post: data[0], type: 'post' }
      } else {
        return error({ statusCode: 404, message: 'Post not found' })
      }
    }
  },
  data: () => ({
    post: null,
    type: 'error',
  }),
  computed: {
    pageInfo() {
      return this.post
    },
  },
}
</script>

<style lang="sass" scoped></style>
