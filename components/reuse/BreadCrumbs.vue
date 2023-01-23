<template>
  <div>
    <b-breadcrumb :items="pathLinks"></b-breadcrumb>
    <!-- {{ pathLinks }} -->
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    pathParts() {
      return this.$route.fullPath.split('/').filter((n) => n)
    },
    pathLinks() {
      const pathLinks = [
        {
          text: 'Главная',
          to: '/',
        },
      ]
      for (let i = 0; i < this.pathParts.length; i++) {
        const anotherLink = {}
        anotherLink.text = 'aerfsfs'
        anotherLink.to = `/${this.pathParts[0]}`
        pathLinks.push(anotherLink)
      }
      return pathLinks
    },
  },
  mounted() {
    // console.log(this.$store.state.currPost.yoast_head_json.schema.value[`@graph`][2].itemListElement);
    // console.log(this.pathParts);
    // console.log(this.pathLinks);
  },
}
</script>

<style lang="sass" scoped>
.breadcrumb
  background: none
  // color: #fff
  margin-bottom: 0
  margin-left: 0
  padding-left: 0
  a
    // color: #b2b2b2
.title-page a
  color: #fff
.breadcrumb-item.active
  // display: none
</style>
