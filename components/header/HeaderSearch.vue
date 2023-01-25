<template>
  <b-nav-form @submit.prevent="search(sInput)">
    <b-input-group size="sm" class="navbar-search">
      <b-form-input v-model="sInput" type="search" placeholder="Поиск"></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Search" variant="outline"
          ><font-awesome-icon icon="fa-solid fa-search"
        /></b-button>
      </b-input-group-append>
    </b-input-group>
  </b-nav-form>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data: () => ({
    sInput: '',
  }),
  methods: {
    search(sQuery) {
      this.sInput = null
      this.$router.replace({ path: `/?s=${sQuery}` })
    }
  },
}
</script>

<style lang="sass" scoped>
.navbar-search
  input
    border-top: 0
    border-bottom: 0
    border-right: 0
    height: 40px !important
    background-color: var(--bg-main)
  button
    // border-right: 1px solid #ced4da
</style>
