<template>
  <div class="serv-card-item">
    <b-button
      v-b-toggle="`collapse-${serv.id}`"
      variant="light"
      class="btn-serv w-100 mb-2"
      @click="fetchChilds(serv.id)"
      >{{ serv.title.rendered }} <font-awesome-icon icon="fa-solid fa-plus"
    /></b-button>
    <b-collapse :id="`collapse-${serv.id}`">
      <b-card class="mb-1">
        <div v-if="loading">
          <b-skeleton-wrapper v-if="loading" :loading="loading" class="skeleton-wrapper">
            <template #loading>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
              <br />
              <b-skeleton type="button"></b-skeleton>
            </template>
          </b-skeleton-wrapper>
        </div>
        <div v-else>
          <b-button
            variant="light"
            class="child-serv w-100 mb-2"
            :to="`/uslugi/${serv.slug}`"
            >{{ serv.title.rendered }}</b-button
          >
          <b-button
            v-for="child in childs"
            :key="child.id"
            variant="light"
            class="child-serv w-100 mb-2"
            :to="`/uslugi/${serv.slug}/${child.slug}`"
            >{{ child.title.rendered }}</b-button
          >
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CardService',
  props: {
    serv: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    async fetchChilds(parID) {
      this.loading = true
      const { data: childs } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=${parID}&per_page=99`
      )
      this.loading = false
      this.childs = childs
      return this.childs
    },
  },
}
</script>

<style lang="sass" scoped>
.skeleton-wrapper
  padding: 30px 15px
.serv-card-item
  margin: 0 10px 0 0
.btn-serv
  background-color: rgba(0,0,0,.07)
  display: flex
  justify-content: space-between
  align-items: center
  border: none
  text-align: left
  padding: 10px
  font-weight: 300
  // width: calc(100% - 10px)
  font-size: 0.95rem
  // font-size: 15px
// .collapse.show
//   margin-top: 10px
.card
  border: none
  background: transparent
.card-body
  padding: 0
.child-serv
  background: none
  text-align: left
  font-size: 0.95rem
.dark
  .btn-light
    // color: var(--text-main)
  .btn-light:hover
    color: var(--text-main)
    background-color: var(--grey)
</style>
