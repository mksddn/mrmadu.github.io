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
    let cat = Number
    if (params.slug.includes('news')) {
      cat = 36
    } else if (params.slug.includes('akcii')) {
      cat = 37
    }
    let posts = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/posts`,
      {
        params: {
          categories: cat,
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
