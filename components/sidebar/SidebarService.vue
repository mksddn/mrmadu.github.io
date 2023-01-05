<template>
  <aside>
    <b-button
      v-for="btn in btns"
      :key="btn.id"
      :to="`/uslugi/${currServ}/${btn.slug}`"
      block
      variant="outline-dark"
      >{{ btn.title.rendered }}</b-button
    >
  </aside>
</template>

<script>
export default {
  name: 'SidebarService',
  props: {
    btns: {
      type: Array,
      required: true,
    },
    currServ: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
aside
  .btn
    text-align: left
    margin-bottom: 15px
    // font-weight: 600
</style>
