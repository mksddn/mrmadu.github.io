<template>
  <ul class="navbar-nav menu-footer nav flex-column">
    <li
      v-for="item in $store.state.menuFooter"
      :key="item.id"
      class="nav-item"
    >
      <b-link class="nav-link" :to="item.url.replace(/^.*\/\/[^\/]+/, '')">
        {{ item.title }}
      </b-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FooterMenu',
  async fetch() {
    if (!this.$store.state.menuFooter) {
      const { data } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/menus/v1/menus/footer-menu`
      )
      this.$store.commit('SET_MENU_FOOTER', data.items)
    }
  },
}
</script>

<style lang="sass" scoped>
.menu-footer
  li
    a
      // text-transform: uppercase
      color: var(--text-main)
      font-size: 0.8rem
      padding: 5px 0
      &:hover
        color: var(--primary)
</style>
