<template>
  <a
    href="#0"
    class="visimp-toggle"
    @click.prevent="$store.commit('SET_IS_VISIMP', !$store.state.visimp.active)"
  >
    <font-awesome-icon icon="fa-solid fa-glasses" />
    <span>версия для слабовидящих</span>
  </a>
</template>

<script>
export default {
  name: 'VisimpToggle',
  computed: {
    active() {
      return this.$store.state.visimp.active
    },
  },
}
</script>

<style lang="sass" scoped>
a.visimp-toggle
  font-size: 1.2rem
  color: var(--text-main)
  display: flex
  align-items: center
  // padding: 0 10px
  span
    font-size: 0.9rem
    margin-left: 5px
</style>
