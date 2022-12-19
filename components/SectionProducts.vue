<template>
  <section id="products" :class="{ bg }">
    <b-container>
      <TitleSection v-if="title" :title="title" />
      <b-row>
        <b-col>
          <b-container fluid>
            <b-row>
              <!-- глянуть реализацию цикла у раздела FAQ -->
              <b-col lg="4">
                <b-button
                  v-b-toggle.collapse-1
                  variant="light"
                  class="mb-2 mt-2 w-100"
                  >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
                /></b-button>
                <b-collapse id="collapse-1">
                  <b-card class="mb-1">I am collapsible content!</b-card>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <b-button
                  v-b-toggle.collapse-2
                  variant="light"
                  class="mb-2 mt-2 w-100"
                  >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
                /></b-button>
                <b-collapse id="collapse-2">
                  <b-card class="mb-1">I am collapsible content!</b-card>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <b-button
                  v-b-toggle.collapse-3
                  variant="light"
                  class="mb-2 mt-2 w-100"
                  >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
                /></b-button>
                <b-collapse id="collapse-3">
                  <b-card class="mb-1">I am collapsible content!</b-card>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <b-button
                  v-b-toggle.collapse-4
                  variant="light"
                  class="mb-2 mt-2 w-100"
                  >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
                /></b-button>
                <b-collapse id="collapse-4">
                  <b-card class="mb-1">I am collapsible content!</b-card>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <b-button
                  v-b-toggle.collapse-5
                  variant="light"
                  class="mb-2 mt-2 w-100"
                  >Toggle Collapse <font-awesome-icon icon="fa-solid fa-plus"
                /></b-button>
                <b-collapse id="collapse-5">
                  <b-card class="mb-1">I am collapsible content!</b-card>
                </b-collapse>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionProducts',
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="sass" scoped>
.bg
  background-image: url('/bg-pr.jpg')
  background-size: cover
.container-fluid
  padding: 0
.btn
  background-color: rgba(0,0,0,.07)
  display: flex
  justify-content: space-between
  align-items: center
</style>
