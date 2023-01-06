<template>
  <div v-if="$store.state.allTags" class="wdgt wdht-tags">
      <h3 class="wdgt-title">Метки</h3>
      <TagItem
        v-for="tag in $store.state.allTags"
        :key="tag.id"
        :tag="tag"
      />
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    if (!this.$store.state.allTags) {
      const { data: allTags } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/tags?hide_empty=1`
      )
      this.$store.commit('SET_ALL_TAGS', allTags)
      // this.allTags = allTags
    }
  },
}
</script>

<style lang="sass" scoped>
</style>
