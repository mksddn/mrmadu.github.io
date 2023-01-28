<template>
  <div v-if="$store.state.allCats" class="wdgt wdgt-cats">
      <h3 class="wdgt-title">Категории</h3>
      <div v-for="cat in $store.state.allCats" :key="cat.id" class="cat-item">
        <b-link :to="`/${cat.slug}`"
          ><h4 class="cat-title">{{ cat.name }}</h4></b-link
        >
        <span class="cat-count">{{ cat.count }}</span>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async fetch() {
    if (!this.$store.state.allCats) {
      const { data: allCats } = await axios.get(
        'https://mammae-clinic.ru/wp-json/wp/v2/categories'
      )
      this.$store.commit('SET_ALL_CATS', allCats)
      // this.allCats = allCats
    }
  },
}
</script>

<style lang="sass" scoped>
.cat-item
  display: flex
  justify-content: space-between
  border-bottom: 1px solid rgba(0,0,0,.07)
  margin-bottom: 15px
  transition: all 0.2s
  *
    font-size: 1rem
    font-weight: normal
  &:hover
    border-bottom-color: var(--primary)
    a
      color: var(--primary)
  a:has(.cat-title)
    width: 100%
  a
    color: inherit
.cat-count
  font-weight: 500
</style>
