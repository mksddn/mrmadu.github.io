<template>
  <section
    class="section-title"
    :class="{
      'title-post': type === 'post',
      'title-page': type === 'page' || type === 'staff',
    }"
  >
    <b-container>
      <b-row>
        <b-col :class="{ 'offset-lg-4': type === 'staff' }">
          <h1 :class="{ show }" v-text="title" />
          <BreadCrumbs />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'page',
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
section.section-title
  &.title-post
    padding: 30px 0
  &.title-page
    background-image: url('static/bgn-grad.png')
    background-color: $primary
    background-size: cover
    background-position: 50% 50%
    color: #fff
    padding: 40px 0
    h1
      text-transform: uppercase
h1
  font-weight: bold
  font-size: 2.3rem
  transition: opacity 0.2s ease-in-out
  opacity: 0
  transition: opacity 0.2s ease-in-out
  &.show
    opacity: 1
</style>
