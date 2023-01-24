<template>
  <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    yoastArray() {
      return this.$store.state.pageInfo.yoast_head_json.schema['@graph'].find(
        (x) => x['@type'] === 'BreadcrumbList'
      ).itemListElement
    },
    breadcrumbs() {
      const breadcrumbs = []
      for (let i = 0; i < this.yoastArray.length; i++) {
        let link = this.yoastArray[i].item
        if (link) {
          link = new URL(this.yoastArray[i].item).pathname
        } else {
          link = null
        }
        breadcrumbs.push({
          text: this.yoastArray[i].name,
          to: { path: link },
        })
      }
      return breadcrumbs
    },
  },
  mounted() {},
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
  display: none
</style>
