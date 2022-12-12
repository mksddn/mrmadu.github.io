<template>
  <section id="pageTitle">
    <b-container>
      <b-row>
        <b-col>
          <h1 :class="{ show }" v-text="title" />
        </b-col>
      </b-row>
      <b-row>
        <BreadCrumbs />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
export default {
  name: 'PageTitle',
  components: {
    BreadCrumbs,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = true // might need this.$nextTick
  },
}
</script>

<style lang="sass" scoped>
section
  background-image: url('static/bgn-grad.png')
  background-color: $primary
  background-size: cover
  background-position: 50% 50%
  color: #fff
  text-transform: uppercase
  padding: 40px 0
h1
  font-weight: bold
  font-size: 2.3rem
  transition: opacity 0.5s ease-in-out
  opacity: 0
  transition: opacity 0.5s ease-in-out
  &.show
    opacity: 1
</style>
