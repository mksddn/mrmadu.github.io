<!-- eslint-disable vue/no-v-html -->
<template>
  <ContentPost v-if="type === 'post'" :post="post" />
  <ContentPage v-else-if="type === 'page'" :post="post" />
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ app, store, params, route, error }) {
    try {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts`,
        {
          params: {
            slug: params.slug,
            _embed: true,
          },
        }
      )
      if (data[0] && data[0].type === 'post') {
        store.commit('SET_CURR_POST', data[0])
        const post = data[0]
        // console.log('post:' + post);
        return { post, type: 'post' }
      } else {
        const { data } = await app.$axios.get(
          `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages`,
          {
            params: {
              slug: params.slug,
              _embed: true,
            },
          }
        )
        store.commit('SET_CURR_POST', data[0])
        const post = data[0]
        // console.log('page:' + post);
        return { post, type: 'page' }
      }
    } catch (error) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data: () => ({
    post: null,
    type: 'error'
  }),
}
</script>

<style lang="sass" scoped></style>
