<template>
  <div>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true,
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
