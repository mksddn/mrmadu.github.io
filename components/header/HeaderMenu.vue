<template>
  <ul class="navbar-nav menu-main">
    <li
      v-for="item in $store.state.menuMain"
      :key="item.id"
      class="nav-item"
      :class="[item.classes, { 'has-childs': item.child_items }]"
    >
      <b-link class="nav-link" :to="item.url.replace(/^.*\/\/[^\/]+/, '')">
        {{ item.title }}
      </b-link>
      <font-awesome-icon
        v-if="item.child_items"
        v-click-outside="externalClick"
        class="icon-drop"
        icon="fa-solid fa-chevron-down"
        @click="showChilds($event)"
      />
      <ul v-if="item.child_items" class="submenu">
        <li v-for="child in item.child_items" :key="child.id">
          <b-link
            class="nav-link"
            :to="child.url.replace(/^.*\/\/[^\/]+/, '')"
            >{{ child.title }}</b-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
import vClickOutside from 'v-click-outside'
export default {
  name: 'HeaderMenu',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  async fetch() {
    if (!this.$store.state.menuMain) {
      const { data } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/menus/v1/menus/main-menu`
      )
      this.$store.commit('SET_MENU_MAIN', data.items)
    }
  },
  methods: {
    showChilds(e) {
      e.currentTarget.parentNode.classList.toggle('show-childs')
    },
    externalClick() {
      const parents = document.querySelectorAll('.has-childs')
      parents.forEach((el) => {
        el.classList.remove('show-childs')
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.menu-main
  li
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    align-content: center
    &.acnt a
      color: var(--primary)
    a
      text-transform: uppercase
      font-size: 1rem
      font-weight: bold
      font-size: 0.9rem
      padding-top: 15px
      padding-bottom: 15px
.icon-drop
  padding: 15px 15px 15px 5px
  cursor: pointer
  // transition: 0.1s all
  &:hover
    color: var(--primary)
  @media (max-width: 992px)
    padding-right: 0
    padding-left: 10px
.show-childs
  .icon-drop
    transform: rotate(180deg)
    padding: 15px 5px 15px 15px
    @media (max-width: 992px)
      padding-left: 0
      padding-right: 10px
.submenu
  display: none
  // z-index: -99
  // opacity: 0
  position: absolute
  top: 49px
  left: 0
  background-color: var(--bg-soft)
  padding: 10px
  list-style-type: none
  text-align: left
  width: 200px
  border-top: 3px solid var(--primary)
  transition: 0.2s all
  li a
    text-transform: none
    padding: 5px
    font-weight: normal
.show-childs .submenu
  display: block
  // opacity: 1
  z-index: 20
  @media (max-width: 992px)
    position: relative
    width: 100%
    top: 0
    background: none
    border: none
.has-childs
  position: relative
.nuxt-link-active
  box-shadow: 0 -3px 0 0 #c21d2b inset
</style>
