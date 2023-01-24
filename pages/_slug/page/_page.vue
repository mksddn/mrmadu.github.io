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
  async asyncData({ app, params, route, headers }) {
    const page = route.params.page
    let cat = Number
    let title = String
    // TODO remake via loop
    if (params.slug.includes('news')) {
      cat = 36
      title = 'Новости'
    } else if (params.slug.includes('akcii')) {
      cat = 37
      title = 'Акции'
    }

    let catInfo = await app.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/categories/${cat}`
    )
    catInfo = catInfo.data
    
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
    return { title, catInfo, posts, page, totalpages }
  },
  data: () => ({
    title: null,
  }),
  computed: {
    pageInfo() {
      return this.catInfo
    },
    metaTitle() {
      return `${this.catInfo.yoast_head_json.title} | Стр. ${this.page}`
    }
  },
}
</script>

<style lang="sass"></style>
