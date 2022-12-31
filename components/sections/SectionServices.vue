<template>
  <section v-if="$store.state.services" id="services">
    <b-container>
      <TitleSection title="Услуги и цены" />
      <b-row>
        <b-col>
          <b-container fluid>
            <b-row no-gutters>
              <b-col
                v-for="serv in $store.state.services"
                :key="serv.id"
                lg="4"
              >
                <CardService :serv="serv" />
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SectionServices',
  async fetch() {
    if (!this.$store.state.services) {
      const { data: services } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=0&per_page=99`
      )
      this.$store.commit('SET_SERVICES', services)
      // this.services = services
    }
  },
}
</script>

<style lang="sass" scoped>
// .bg
//   background-image: url('/bg-pr.jpg')
//   background-size: cover
.container-fluid
  padding: 0
</style>
