<template>
  <div>
    <TitlePost :title="title" />
    <section id="archiveContent" class="pt-0">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <b-skeleton-wrapper v-if="loading" :loading="loading">
              <template #loading>
                <b-card>
                  <b-skeleton-img></b-skeleton-img>
                  <br />
                  <b-skeleton width="85%"></b-skeleton>
                  <b-skeleton width="55%"></b-skeleton>
                  <b-skeleton width="70%"></b-skeleton>
                  <br />
                  <b-skeleton type="button"></b-skeleton>
                </b-card>
              </template>
            </b-skeleton-wrapper>
            <PostPreview
              v-for="post in ARTICLES"
              v-else
              :key="post.id"
              :title="post.title.rendered"
              :post-id="post.id"
              :thumbnail="post.fimg_url"
              :desc="post.content.rendered"
              url="post"
            />
            <div class="pagination m-3 justify-content-center">
              <b-pagination-nav
                :link-gen="linkGen"
                :number-of-pages="10"
                use-router
              ></b-pagination-nav>
            </div>
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
import { mapActions, mapGetters } from 'vuex'
import PostPreview from '../components/PostPreview.vue'
export default {
  components: { PostPreview },
  layout: 'page',
  data: () => ({
    title: 'Архив записей',
    loading: true,
    // posts: [],
  }),
  // async fetch() {
  //   const { data: posts } = await axios.get(
  //     'https://mammae-clinic.ru/wp-json/wp/v2/posts'
  //   )
  //   this.posts = posts
  // },
  computed: {
    ...mapGetters(['ARTICLES']),
  },
  mounted() {
    this.GET_ARTICLES_FROM_API().then((response) => {
      if (response.data) {
        this.loading = false
      }
    })
  },
  methods: {
    ...mapActions(['GET_ARTICLES_FROM_API']),
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>

<style lang="sass" scoped></style>
