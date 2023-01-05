<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <TitlePage :title="currServ.title.rendered" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col v-if="childs" lg="3">
            <SidebarService :btns="childs" :curr-serv="currServ" />
          </b-col>
          <b-col>
            <h2>Описание и цены</h2>
            <br />
            <div v-html="currServ.content.rendered" />
            <br />
            <div v-if="currServ.acf.service_price" class="price">
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
                class="table b-table table-striped table-hover"
                v-html="currServ.acf.service_price"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'post',
  async asyncData({ app, store, params, route }) {
    if (
      !store.state.currServ ||
      route.params.slug !== store.state.currServ.slug
    ) {
      const { data } = await app.$axios.get(
        `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi`,
        {
          params: {
            slug: params.slug,
            _embed: true,
          },
        }
      )
      store.commit('SET_CURR_SERV', data[0])
      return { currServ: data[0] }
    }
  },
  data: () => ({
    childs: null,
  }),
  async fetch() {
    const { data: childs } = await axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/uslugi?parent=${this.$store.state.currServ.id}&per_page=99`
    )
    if (childs.length < 1) {
      this.childs = null
    } else {
      this.childs = childs
    }
    return this.childs
  },
}
</script>

<style lang="sass" scoped>
table
  overflow: scroll
.thead
  width: 100%
  max-width: 767px
// .table table tr:nth-child(odd)
//   background: #e9e9e9
// .table table tr:nth-child(even)
//   background: #f5f5f5
// .dark
//   table td
//     color: var(--text-main)
</style>
