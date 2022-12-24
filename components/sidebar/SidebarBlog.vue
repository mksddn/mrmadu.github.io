<template>
  <aside>
    <SidebarCats />
    <SidebarPosts />
    <SidebarTags />
  </aside>
</template>

<script>
export default {
  name: 'SidebarBlog',
}
</script>

<style lang="sass">
// aside
//   padding: 30px 0
.wdgt
  margin-bottom: 60px
  &-title
    font-size: 1.3rem
    font-weight: 500
    margin-bottom: 30px
  a
    // color: inherit
</style>
