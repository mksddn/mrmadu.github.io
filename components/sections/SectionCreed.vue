<template>
  <section id="creed">
    <b-container>
      <b-row>
        <b-col>
          <span v-animate-fadein class="creed-text">{{
            $store.state.homePage.acf.clinic_creed
          }}</span>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionCreed',
}
</script>

<style lang="sass" scoped>
#creed
  background-color: var(--bg-soft)
.creed-text
  text-transform: uppercase
  display: block
  text-align: center
  font-size: 1.5rem
  font-weight: bold
</style>
