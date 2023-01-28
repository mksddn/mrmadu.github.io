<template>
  <div class="icons">
    <div
      class="ya-share2"
      data-curtain
      data-shape="round"
      data-services="vkontakte,odnoklassniki,telegram,twitter,whatsapp"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ShareIcons',
  mounted() {
    const plugin = document.createElement('script')
    plugin.setAttribute('src', 'https://yastatic.net/share2/share.js')
    plugin.async = true
    document.head.appendChild(plugin)
  },
}
</script>

<style lang="sass" scoped>
a span
  font-size: 1.5rem
  margin-left: 5px
</style>
