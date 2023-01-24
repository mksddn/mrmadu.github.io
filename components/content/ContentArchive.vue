<template>
  <section id="ContentArchive" class="pt-0">
    <b-container>
      <b-row>
        <b-col class="cntnt">
          <CardPostArchive
            v-for="post in posts || $store.state.posts"
            :key="post.id"
            v-animate-fromdown
            :post="post"
          />
          <PaginationNav :totalpages="totalpages" />
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
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped></style>
