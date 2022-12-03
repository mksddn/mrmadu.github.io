<template>
  <section id="products" :class="{bg}">
    <b-container>
      <b-row>
        <b-col v-if="title">
          <BaseTitle :title="title" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <BaseProducts />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionProducts',
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="sass" scoped>
.bg
  background-image: url('/bg-pr.jpg')
  background-size: cover
</style>
