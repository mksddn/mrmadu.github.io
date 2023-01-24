<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <TitlePage :title="currServ.title.rendered" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col class="order-xl-2">
            <h2>Описание и цены</h2>
            <h3>{{ currServ.title.rendered }}</h3>
            <br />
            <div v-html="currServ.content.rendered" />
            <br />
            <div class="price">
              <table class="thead">
                <tbody>
                  <tr>
                    <td>
                      <b>Наименование услуг</b>
                    </td>
                    <td class="text-right">
                      <b>Стоимость услуг</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div
                v-if="currServ.acf.service_price"
                class="table b-table table-striped table-hover"
                v-html="currServ.acf.service_price"
              />
              <div
                v-else-if="hasParent"
                class="table b-table table-striped table-hover"
                v-html="parent.acf.service_price"
              />
              <b-skeleton-table
                v-else
                :rows="10"
                :columns="2"
                :table-props="{ bordered: true, striped: true }"
              ></b-skeleton-table>
            </div>
          </b-col>
          <b-col lg="3">
            <SidebarService
              v-if="sidebarBtns"
              :btns="sidebarBtns"
              :curr-serv="currServ.slug"
              :has-childs="hasChilds"
            />
            <b-skeleton-table
              v-else
              :rows="10"
              :columns="1"
              :table-props="{ bordered: true, striped: true }"
            ></b-skeleton-table>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    currServ: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    sidebarBtns: null,
    hasParent: false,
    parent: null,
    hasChilds: false,
  }),
  async fetch() {
    const { data: childs } = await axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=${this.$store.state.currServ.id}&per_page=99`
    )
    if (childs.length < 1) {
      if (!this.$store.state.services) {
        const { data: services } = await axios.get(
          `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=0&per_page=99`
        )
        this.$store.commit('SET_SERVICES', services)
        this.sidebarBtns = services
      } else {
        this.sidebarBtns = this.$store.state.services
      }
    } else {
      this.sidebarBtns = childs
      this.hasChilds = true
    }

    if (!this.currServ.acf.service_price) {
      const parentID = this.currServ.parent
      const { data: parent } = await axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi/${parentID}`
      )
      this.parent = parent
      this.hasParent = true
    }
    return [this.sidebarBtns, this.parent]
  },
}
</script>

<style lang="sass" scoped>
table
  overflow: scroll
.thead
  width: 100%
  max-width: 767px
</style>
