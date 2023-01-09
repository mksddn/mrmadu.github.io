<template>
  <div>
    <TitlePage :title="title" type="post" />
    <ContentArchive :posts="posts" :totalpages="totalpages" />
  </div>
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ app, params, route, headers }) {
    const page = route.params.page
    let posts = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts`,
      {
        params: {
          categories: 36,
          page,
          _embed: true,
        },
        headers,
      }
    )
    const totalpages = posts.headers['x-wp-totalpages']
    posts = posts.data
    return { posts, totalpages }
  },
  data: () => ({
    title: 'Архив записей',
  }),
}
</script>

<style lang="sass"></style>
