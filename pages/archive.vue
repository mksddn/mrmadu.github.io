<template>
  <div>
    <BaseTitlePost :title="title" />
    <section id="archiveContent">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <PostPreview
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              :post-id="post.id"
              :thumbnail="post.thumbnail"
              :desc="post.desc"
              :url="post.url"
            />
            <div class="pagination">
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
import PostPreview from '../components/PostPreview.vue'
export default {
  components: { PostPreview },
  layout: 'page',
  data: () => ({
    title: 'Архив записей',
    posts: [
      {
        title: 'post 1',
        id: '01',
        thumbnail: 'post.jpg',
        desc: 'excerpt',
        url: 'post',
      },
      {
        title: 'post 2',
        id: '02',
        thumbnail: 'post.jpg',
        desc: 'excerpt',
        url: 'post',
      },
      {
        title: 'post 3',
        id: '03',
        thumbnail: 'post.jpg',
        desc: 'excerpt',
        url: 'post',
      },
      {
        title: 'post 4',
        id: '04',
        thumbnail: 'post.jpg',
        desc: 'excerpt',
        url: 'post',
      },
      {
        title: 'post 5',
        id: '05',
        thumbnail: 'post.jpg',
        desc: 'excerpt',
        url: 'post',
      },
    ],
  }),
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  },
}
</script>

<style lang="sass" scoped>
#archiveContent
  padding-top: 0
.pagination
  justify-content: center
  margin: 30px
</style>
