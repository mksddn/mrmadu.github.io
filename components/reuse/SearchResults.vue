<template>
  <div>
    <TitlePage :title="query" type="post" is-search />
    <ContentArchive
      v-if="sResults"
      :posts="sResults"
      :totalpages="totalpages"
      is-search
    />
    <section v-else>
      <b-container>
        <b-row>
          <b-col>
            <h3>Ничего не найдено</h3>
            <hr>
            <b-link to="/">Вернуться на главную</b-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- <pre>{{ this.sResults }}</pre> -->
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
  }),
  async fetch() {
    const sResults = await axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/search?_embed&search=${encodeURI(
        this.query
      )}`,
      {
        params: {
          s: this.query,
          ContentType: 'application/json; charset=utf-8',
          _embed: true,
          per_page: 99,
        },
      }
    )
    this.totalpages = sResults.headers['x-wp-totalpages']
    this.sResults = sResults.data
    // console.log(this.sResults.length)
  },
  // computed: {
  //   totalpages() {
  //     return this.sResults.headers['x-wp-totalpages']
  //   }
  // },
}
</script>

<style lang="sass" scoped></style>
