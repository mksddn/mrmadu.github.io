<template>
  <b-link :to="`/tag/${tag.slug}`" class="tag-item">{{ tag.name }}</b-link>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    tag: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.tag-item
  display: inline-block
  font-size: 0.75rem
  text-transform: uppercase
  background-color: $primary
  color: #fff !important
  text-decoration: none
  padding: 8px 10px
  margin: 0 2px 2px 0
  &:hover
    background-color: darken($primary, 10%)
</style>
