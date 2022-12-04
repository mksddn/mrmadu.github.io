<template>
  <b-row>
    <b-col>
      <h2 class="title">{{ title }}</h2>
    </b-col>
    <b-col v-if="btnLink" class="text-right">
      <a href="/" class="btn btn-primary">смотреть все</a>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SectionTitleRow',
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
  margin-bottom: 30px
  &:after
    content: ''
    display: block
    width: 60px
    height: 2px
    margin-top: 5px
    background-color: $primary
</style>
