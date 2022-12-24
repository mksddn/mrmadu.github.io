<template>
  <div class="serv-card-item">
    <b-button v-b-toggle="`collapse-${serv.id}`" variant="light" class="btn-serv w-100"
      >{{ serv.title.rendered }} <font-awesome-icon icon="fa-solid fa-plus"
    /></b-button>
    <b-collapse :id="`collapse-${serv.id}`">
      <b-card class="mb-1">I am collapsible content!</b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    serv: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.serv-card-item
  margin: 0 10px 10px 0
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
</style>
