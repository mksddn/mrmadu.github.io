<template>
  <div v-if="$store.state.lastNews" class="wdgt wdgt-posts">
    <h3 class="wdgt-title">Последние записи</h3>
    <CardPostSidebar v-for="post in $store.state.lastNews" :key="post.id" :post="post">
    </CardPostSidebar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    // ЗАМЕНИТЬ НОВОСТИ НА ВСЕ ЗАПИСИ!
    if (!this.$store.state.lastNews) {
      const { data: lastNews } = await axios.get(
        'https://mammae-clinic.ru/wp-json/wp/v2/posts?caregories=36&per_page=4'
      )
      this.$store.commit('SET_LAST_NEWS', lastNews)
      // this.lastNews = lastNews
    }
  },
}
</script>

<style lang="sass" scoped></style>
