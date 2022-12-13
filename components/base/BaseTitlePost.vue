<template>
  <section id="postTitle">
      <b-row>
        <b-col>
          <h1 :class="{ show }" v-text="title" />
        </b-col>
      </b-row>
      <b-row>
        <BreadCrumbs />
      </b-row>
  </section>
</template>

<script>
import BreadCrumbs from '~/components/BreadCrumbs'
export default {
  name: 'PostTitle',
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
#postTitle
  padding: 30px 0
h1
  font-weight: bold
  font-size: 2.3rem
  transition: opacity 0.5s ease-in-out
  opacity: 0
  transition: opacity 0.5s ease-in-out
  &.show
    opacity: 1
</style>
