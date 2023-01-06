<template>
  <div></div>
</template>

<script>
export default {
  // beforeRouteEnter(to, from, next) {
  //   const session = this.$cookie.get('session')
  //   if (session) next({ path: '/search-content' })
  // },
  beforeRouteEnter(to, from, next) {
    next({ path: '/news/page/1' })
  },
  // layout: 'page',
  // created() {
  //   // const cat = this.$rout.params
  //   this.$router.push(`/news/page/1`)
  //   // console.log(this.$route.fullPath);
  //   // console.log(this.$route.path);
  // },
}
</script>

<style lang="sass"></style>
