<!-- eslint-disable vue/no-v-html -->
<template>
  <section id="addInfo">
    <b-container>
      <b-row>
        <b-col>
          <div v-html="$store.state.homePage.acf.add_text" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionAddinfo',
}
</script>

<style lang="sass" scoped>
.container
  border-left: 1px solid rgba(0,0,0,.1)
a
  font-weight: bold
  margin-bottom: 20px
  display: block
  color: inherit
p
  margin: 0
</style>
