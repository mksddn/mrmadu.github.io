<template>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"
      ><p>I'm the tab with the very, very long title</p></b-tab
    >
  </b-tabs>
</template>

<script>
export default {
  name: 'TheTabs',
}
</script>

<style lang="sass">
.tabs .nav-tabs .nav-link.active, .tabs .nav-tabs .nav-item.show .nav-link
  background-color: transparent
  border-color: transparent
.tabs .nav-tabs .nav-link.active
  border-bottom-color: $primary
a.nav-link
  color: inherit
</style>
