<template>
  <div>
    <TitlePage :title="post.title.rendered" type="post" />
    <section id="postContent">
      <b-container>
        <b-row>
          <b-col class="cntnt">
            <!-- <img
              :src="
                post._embedded['wp:featuredmedia'][0].media_details.sizes
                  .large.source_url
              "
              :alt="post.title.rendered"
              class="thumbnail"
            /> -->
            <img
              :src="post.fimg_url"
              :alt="post.title.rendered"
              class="thumbnail"
            />
            <br />
            <div class="post-text" v-html="post.content.rendered" />
            <br />
            <b-link
              v-for="cat in postCats"
              :key="cat.id"
              :to="`/${cat.slug}`"
              class="post-cat"
              >{{ cat.name }}</b-link
            >
            <div v-if="postTags" class="tags">
              <hr />
              <TagItem v-for="tag in postTags" :key="tag.slug" :tag="tag" />
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
import axios from 'axios'
export default {
  name: 'ContentPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    postTags: null,
    postCats: null,
  }),
  async fetch() {
    if (this.$store.state.currPost.tags > 0) {
      const { data: postTags } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/tags?include=${this.post.tags}`
      )
      this.postTags = postTags
    }

    const { data: postCats } = await axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/categories?include=${this.post.categories}`
    )
    this.postCats = postCats
    // console.log(postCats);
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
.post-cat
  display: block
#shareIcons
  display: flex
  align-items: center
  justify-content: space-between
  border-top: 1px solid rgba(0, 0, 0, 0.07)
  padding: 10px 0
</style>
