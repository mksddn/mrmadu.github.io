<template>
  <b-row>
    <b-col xs="5">
      <h2 v-animate-fromright class="title mb-4">{{ title }}</h2>
    </b-col>
    <b-col v-if="btnLink" class="text-right">
      <a href="/" class="btn btn-primary">{{ btnText }}</a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    btnLink: {
      type: String,
      default: null,
    },
    btnText: {
      type: String,
      default: 'смотреть все',
    },
  },
}
</script>

<style lang="sass" scoped>
.title
  font-size: 2.2rem
  text-transform: uppercase
  font-weight: bold
  &:after
    content: ''
    display: block
    width: 60px
    height: 2px
    margin-top: 5px
    background-color: var(--primary)
</style>
