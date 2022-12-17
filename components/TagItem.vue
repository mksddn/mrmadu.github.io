<template>
  <b-link :to="url" class="tag-item">{{ name }}</b-link>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.tag-item
  background-color: $primary
  color: #fff !important
  text-decoration: none
  padding: 8px 10px
  margin: 0 2px 2px 0
  &:hover
    background-color: darken($primary, 10%)
</style>
