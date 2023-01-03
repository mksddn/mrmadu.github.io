<template>
  <section v-if="$store.state.lastStaff">
    <b-container>
      <TitleSection title="Наши врачи" btn-link="/" />
      <b-row>
        <b-col class="slider-wrapper">
          <SliderCarousel :slides="$store.state.lastStaff" type="staff" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionStaff',
  async fetch() {
    if (!this.$store.state.lastStaff) {
      const { data: lastStaff } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/staff?per_page=10`
      )
      this.$store.commit('SET_LAST_STAFF', lastStaff)
      // this.lastStaff = lastStaff
    }
  },
}
</script>
<style lang="sass" scoped>
section
  background-color: var(--bg-soft)
</style>
