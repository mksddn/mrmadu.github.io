<!-- eslint-disable vue/no-v-html -->
<template>
  <ContentPost v-if="post && type === 'post'" :post="post" />
  <ContentPage v-else-if="post && type === 'page'" :post="post" />
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ app, store, params, error }) {
    const slug = params.slug
    if (store.state.pageSlugs.includes(slug)) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?_embed&slug=${slug}`
      )
      if (data[0]) {
        store.commit('SET_CURR_POST', data[0])
        return { post: data[0], type: 'page' }
      } else {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    } else {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?slug=${slug}&embed`
      )
      if (data[0]) {
        store.commit('SET_CURR_POST', data[0])
        return { post: data[0], type: 'post' }
      } else {
        return error({ statusCode: 404, message: 'Post not found' })
      }
    }
  },
  // async asyncData({ app, store, params, route, error }) {
  //   try {
  //     const { data } = await app.$axios.get(
  //       `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts?slug=${params.slug}&embed`,
  //       // {
  //       //   params: {
  //       //     slug: params.slug,
  //       //     _embed: true,
  //       //   },
  //       // }
  //     )
  //     if (data[0] && data[0].type === 'post') {
  //       store.commit('SET_CURR_POST', data[0])
  //       const post = data[0]
  //       // console.log('post:' + post);
  //       return { post, type: 'post' }
  //     } else {
  //       const { data } = await app.$axios.get(
  //         `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?_embed&slug=${params.slug}`,
  //         // {
  //         //   params: {
  //         //     slug: params.slug,
  //         //     _embed: true,
  //         //   },
  //         // }
  //       )
  //       store.commit('SET_CURR_POST', data[0])
  //       const post = data[0]
  //       // console.log('page:' + post);
  //       return { post, type: 'page' }
  //     }
  //   } catch (error) {
  //     error({ statusCode: 404, message: 'Post not found' })
  //   }
  // },
  data: () => ({
    post: null,
    type: 'error',
  }),
}
</script>

<style lang="sass" scoped></style>
