<template>
  <div>
    <TitlePost :title="title" />
    <section id="archiveContent" class="pt-0">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <PostPreview
              v-for="post in posts"
              :key="post.id"
              :title="post.title.rendered"
              :post-id="post.id"
              :thumbnail="post.thumbnail"
              :desc="post.excerpt.rendered"
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
import axios from "axios"
import PostPreview from '../components/PostPreview.vue'
export default {
  components: { PostPreview },
  layout: 'page',
  data: () => ({
    title: 'Архив записей',
    posts: [],
  }),
  async fetch() {
    const { data: posts } = await axios.get(
      'https://mammae-clinic.ru/wp-json/wp/v2/posts'
    )
    this.posts = posts
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>

<style lang="sass" scoped></style>
