<template>
  <div v-if="$store.state.lastArticles" class="wdgt wdgt-posts">
    <h3 class="wdgt-title">Последние записи</h3>
    <CardPostSidebar v-for="post in $store.state.lastArticles" :key="post.id" :post="post">
    </CardPostSidebar>
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

<style lang="sass" scoped></style>
