<template>
  <div>
    <TitlePage :title="query" type="post" is-search />
    <!-- {{ sResults.length }} -->
    <ContentArchive
      v-if="sResults"
      ref="content"
      :key="componentKey"
      :posts="sResults"
      :totalpages="totalpages"
      is-search
    />
    <section v-else>
      <b-container>
        <b-row>
          <b-col>
            <b-skeleton-table
              :rows="10"
              :columns="2"
              :table-props="{ bordered: true, striped: true }"
            ></b-skeleton-table>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchResults',
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    sResults: null,
    totalpages: null,
    componentKey: 0,
  }),
  async fetch() {
    const sResults = await axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/search?_embed&search=${encodeURI(
        this.query
      )}`,
      {
        params: {
          // s: this.query,
          ContentType: 'application/json; charset=utf-8',
          // _embed: true,
          per_page: 99,
        },
      }
    )
    this.totalpages = sResults.headers['x-wp-totalpages']
    this.sResults = sResults.data
  },
  watch: {
    '$route.query.s'() {
      this.methodThatForcesUpdate()
    },
  },
}
</script>

<style lang="sass" scoped></style>
