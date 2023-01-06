<template>
  <section id="archiveContent" class="pt-0">
    <b-container>
      <b-row>
        <b-col class="cntnt">
          <CardPostArchive
            v-for="post in posts || $store.state.posts"
            :key="post.id"
            :post="post"
          />
          <div class="pagination m-3 justify-content-center">
            <b-pagination-nav
              :link-gen="linkGen"
              :number-of-pages="totalpages"
              use-router
            ></b-pagination-nav>
          </div>
        </b-col>
        <b-col lg="4" class="sdbr">
          <SidebarBlog />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    totalpages: {
      type: Number,
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
