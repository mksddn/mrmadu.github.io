<template>
  <div v-if="$store.state.lastArticles" class="wdgt wdgt-posts">
    <h3 class="wdgt-title">Последние записи</h3>
    <div
      v-for="post in $store.state.lastArticles"
      :key="post.id"
      class="post-item"
    >
      <b-link :to="`/${post.slug}`"
        ><img :src="post.fimg_url" :alt="post.title.rendered" class="post-img"
      /></b-link>
      <div class="post-info">
        <span class="post-date">{{ post.date }}</span>
        <b-link :to="`/${post.slug}`"
          ><h4 class="post-title">{{ post.title.rendered }}</h4></b-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    if (!this.$store.state.lastArticles) {
      const { data: lastArticles } = await axios.get(
        'https://mammae-clinic.ru/wp-json/wp/v2/posts?per_page=4'
      )
      this.$store.commit('SET_LAST_ARTICLES', lastArticles)
      // this.lastArticles = lastArticles
    }
  },
}
</script>

<style lang="sass" scoped>
.post-item
  display: flex
  margin-bottom: 15px
a:has(.post-img)
  width: 80px
  min-width: 80px
  height: 80px
  margin-right: 10px
.post-img
  height: 100%
.post-date
  font-size: 0.8rem
  color: #888
  line-height: 1
.post-title
  font-size: 0.9rem
.post-info
  display: flex
  flex-direction: column
.post-date
  margin-bottom: 5px
</style>
