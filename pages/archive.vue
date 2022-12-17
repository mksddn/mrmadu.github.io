<template>
  <div>
    <BaseTitlePost :title="title" />
    <section id="postContent">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <PostPreview v-for="post in posts" :key="post.id" />
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
}
</script>

<style lang="sass" scoped></style>
