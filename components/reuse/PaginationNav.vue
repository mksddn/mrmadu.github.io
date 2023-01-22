<template>
  <div class="pagination m-3 justify-content-center">
    <b-pagination-nav
      :link-gen="linkGen"
      :number-of-pages="totalpages"
      use-router
    ></b-pagination-nav>
  </div>
</template>

<script>
export default {
  name: 'PaginationNav',
  props: {
    totalpages: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkGen(pageNum) {
      if (this.$route.params.page) {
        return {
          path: '',
          params: { page: pageNum },
        }
      } else {
        // console.log(this.$route.params.page)
        // console.log(this.$route.path)
        // console.log(pageNum)
        // this.$router.push({
        //   path: `${this.$route.path}/page/${pageNum}`,
        //   // params: { page: pageNum },
        // })
      }
    },
  },
}
</script>

<style lang="sass">
.pagination
  &, *
    border-radius: 0 !important
  .page-link, .page-item.disabled .page-link
    background-color: var(--bg-soft)
    border-color: var(--bg-main)
  .page-item.disabled .page-link
    color: var(--text-main)
  .page-item.active .page-link
    background-color: var(--primary)
    border-color: var(--bg-main)
  .page-link:hover, .page-item.active .page-link:hover, .page-item.disabled .page-link:hover
    background-color: var(--primary)
    color: var(--text-light)
</style>
