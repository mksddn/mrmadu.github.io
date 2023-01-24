<template>
  <aside>
    <div v-if="hasChilds">
      <b-button
        v-for="btn in btns"
        :key="btn.id"
        :to="`/uslugi/${currServ}/${btn.slug}`"
        block
        variant="outline-dark"
        >{{ btn.title.rendered }}</b-button
      >
    </div>
    <div v-else>
      <b-button
        v-for="btn in btns"
        :key="btn.id"
        :to="`/uslugi/${btn.slug}`"
        block
        variant="outline-dark"
        >{{ btn.title.rendered }}</b-button
      >
    </div>
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
      default: null,
    },
    hasChilds: {
      type: Boolean,
      default: false,
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
