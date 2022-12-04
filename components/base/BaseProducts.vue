<template>
  <b-container fluid>
    <b-row>
      <!-- глянуть реализацию цикла у раздела FAQ -->
      <b-col lg="4">
        <b-button v-b-toggle.collapse-1 variant="light" class="mb-2 mt-2 w-100"
          >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
        /></b-button>
        <b-collapse id="collapse-1">
          <b-card class="mb-1">I am collapsible content!</b-card>
        </b-collapse>
      </b-col>
      <b-col lg="4">
        <b-button v-b-toggle.collapse-2 variant="light" class="mb-2 mt-2 w-100"
          >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
        /></b-button>
        <b-collapse id="collapse-2">
          <b-card class="mb-1">I am collapsible content!</b-card>
        </b-collapse>
      </b-col>
      <b-col lg="4">
        <b-button v-b-toggle.collapse-3 variant="light" class="mb-2 mt-2 w-100"
          >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
        /></b-button>
        <b-collapse id="collapse-3">
          <b-card class="mb-1">I am collapsible content!</b-card>
        </b-collapse>
      </b-col>
      <b-col lg="4">
        <b-button v-b-toggle.collapse-4 variant="light" class="mb-2 mt-2 w-100"
          >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
        /></b-button>
        <b-collapse id="collapse-4">
          <b-card class="mb-1">I am collapsible content!</b-card>
        </b-collapse>
      </b-col>
      <b-col lg="4">
        <b-button v-b-toggle.collapse-5 variant="light" class="mb-2 mt-2 w-100"
          >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
        /></b-button>
        <b-collapse id="collapse-5">
          <b-card class="mb-1">I am collapsible content!</b-card>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BaseProducts',
}
</script>

<style lang="sass" scoped>
.container-fluid
  padding: 0
.btn
  background-color: rgba(0,0,0,.07)
  display: flex
  justify-content: space-between
  align-items: center
// .card-body
//   position: absolute
//   background-color: #fff
//   width: 100%
//   margin-top: -20px
//   z-index: 2
</style>
