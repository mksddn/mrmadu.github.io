<template>
  <div>
    <TitlePost :title="article.title.rendered" />
    <section id="postContent">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <img
              :src="
                article._embedded['wp:featuredmedia'][0].media_details.sizes
                  .large.source_url
              "
              :alt="article.title.rendered"
              class="thumbnail"
            />
            <br />
            <div class="post-text" v-html="article.content.rendered" />
            <br />
            <pre v-html="article.categories" />
            <pre v-html="article.tags" />
            <div class="tags">
              <TagItem v-for="tag in article.tags" :key="tag.url" />
            </div>
            <br />
            <div id="shareIcons">
              <div class="title"><span>Поделиться:</span></div>
              <ShareIcons />
            </div>
            <PrevNextPost />
          </b-col>
          <b-col lg="4" class="sdbr">
            <SidebarBlog />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ShareIcons from '~/components/ShareIcons'
import PrevNextPost from '~/components/PrevNextPost'
import TagItem from '~/components/TagItem'
import SidebarBlog from '~/components/SidebarBlog'
export default {
  components: { TagItem, SidebarBlog, ShareIcons, PrevNextPost },
  layout: 'post',
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `https://mammae-clinic.ru/wp-json/wp/v2/posts`,
      {
        params: {
          slug: params.slug,
          _embed: true,
        },
      }
    )
    store.commit('SET_ARTICLE_TO_STATE', data[0])
    return { article: data[0] }
  },
  // post: {
  //   type: Object,
  //   required: true,
  // },
  // data: () => ({
  //   title: 'Курс «Когнитивно-поведенческая терапия ожирения»',
  //   thumbnail: '/post1.jpeg',
  //   cats: [
  //     {
  //       title: 'Category 1',
  //       url: 'archive',
  //     },
  //   ],
  //   tags: [
  //     {
  //       title: 'Tag 1',
  //       url: 'archive',
  //     },
  //     {
  //       title: 'Tag 2',
  //       url: 'archive',
  //     },
  //   ],
  // }),
  computed: {
    // slug: this.$route.params.slug,
  },
}
</script>

<style lang="sass" scoped>
#postContent
  padding-top: 0
.cntnt
  margin-bottom: 60px
.thumbnail
  margin-bottom: 50px
#shareIcons
  display: flex
  align-items: center
  justify-content: space-between
  border-top: 1px solid rgba(0, 0, 0, 0.07)
  padding: 10px 0
</style>
