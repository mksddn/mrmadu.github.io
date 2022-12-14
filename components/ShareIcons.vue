<template>
  <div id="shareIcons">
    <div class="title"><span>Поделиться:</span></div>
    <div class="icons">
      <b-link to="/"><font-awesome-icon icon="fa-brands fa-facebook" /></b-link>
      <b-link to="/"><font-awesome-icon icon="fa-brands fa-twitter" /></b-link>
      <b-link to="/"><font-awesome-icon icon="fa-brands fa-vk" /></b-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareIcons',
}
</script>

<style lang="sass" scoped>
#shareIcons
  display: flex
  align-items: center
  justify-content: space-between
  border-top: 1px solid rgba(0, 0, 0, 0.07)
  padding: 10px 0
svg
  font-size: 1.5rem
  margin-left: 5px
</style>
