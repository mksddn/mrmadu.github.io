<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- <b-skeleton-wrapper v-if="loading" :loading="loading">
    <template #loading>
      <b-skeleton-table
        :rows="5"
        :columns="2"
        :table-props="{ bordered: true, striped: true }"
      ></b-skeleton-table>
    </template>
  </b-skeleton-wrapper> -->
  <div>
    <b-tabs content-class="mt-3" fill>
      <b-tab
        v-if="$store.state.currDoc.acf.staff_main"
        title="Общая информация"
        active
      >
        <div v-html="$store.state.currDoc.acf.staff_main" />
      </b-tab>
      <b-tab
        v-if="$store.state.currDoc.acf.staff_activity"
        title="Научная и практическая деятельность"
      >
        <div v-html="$store.state.currDoc.acf.staff_activity" />
      </b-tab>
      <b-tab v-if="$store.state.currDoc.acf.staff_sert" title="Сертификаты">
        <div v-html="$store.state.currDoc.acf.staff_sert" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'TheTabs',
  props: {
    // type: {
    //   type: String,
    //   required: true,
    // },
    // post: {
    //   type: Object,
    //   required: true,
    // },
  },
  data: () => ({
    // loading: true,
  }),
  // async fetch() {
  //   const { data: currDocACF } = await axios.get(
  //     `${process.env.VUE_APP_WP_API_URL}/acf/v3/posts/${this.post.id}`
  //   )
  //   this.$store.commit('SET_CURR_DOC_ACF', currDocACF)
  //   // this.currDocACF = currDocACF
  //   this.loading = false
  // },
}
</script>

<style lang="sass">
.tabs .nav-tabs .nav-link.active, .tabs .nav-tabs .nav-item.show .nav-link
  background-color: transparent
  border-color: transparent
  color: var(--text-main)
.tabs .nav-tabs .nav-link.active
  border-bottom-color: var(--primary)
.nav-tabs .nav-link
  color: inherit
</style>
