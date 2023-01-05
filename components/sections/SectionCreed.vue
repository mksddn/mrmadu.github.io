<template>
  <section v-if="$store.state.homePage && $store.state.homePage.acf.clinic_creed" id="creed">
    <b-container>
      <b-row>
        <b-col>
          <span v-animate-fadein class="creed-text">{{
            $store.state.homePage.acf.clinic_creed
          }}</span>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionCreed',
  async fetch() {
    if (!this.$store.state.homePage) {
      const { data: homePage } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages/779`,
        {
          params: {
            _embed: true,
          },
        }
      )
      this.$store.commit('SET_HOME_PAGE', homePage)
      this.homePage = homePage
    }
  },
}
</script>

<style lang="sass" scoped>
#creed
  background-color: var(--bg-soft)
.creed-text
  text-transform: uppercase
  display: block
  text-align: center
  font-size: 1.5rem
  font-weight: bold
</style>
