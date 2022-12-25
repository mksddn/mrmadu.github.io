<template>
  <div>
    <TitlePage :title="currDoc.title.rendered" type="staff" />
    <section>
      <b-container>
        <b-row>
          <b-col class="doc-img mb-5" lg="4">
            <img
              :src="currDoc.fimg_url"
              :alt="currDoc.title.rendered"
              class="thumbnail"
            />
            <div class="doc-excerpt">
              <p>
                Директор ООО «Клиника МАММЭ», реконструктивно-пластический
                хирург, онколог, маммолог, действительный член общества РОПРЭХ,
                заведующий кафедрой онкологии КМИ, доцент, кандидат медицинских
                наук
              </p>
            </div>
          </b-col>
          <b-col class="doc-info">
            <TheTabs />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <PrevNextPost />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'post',
  async asyncData({ app, store, params, route }) {
    if (
      !store.state.currDoc ||
      route.params.slug !== store.state.currDoc.slug
    ) {
      const { data } = await app.$axios.get(
        `https://mammae-clinic.ru/wp-json/wp/v2/staff`,
        {
          params: {
            slug: params.slug,
            _embed: true,
          },
        }
      )
      store.commit('SET_CURR_DOC', data[0])
      return { currDoc: data[0] }
    }
  },
}
</script>

<style lang="sass" scoped>
section
  background-color: #f1f1f1
.doc-img img
  margin-top: -240px
  @media (max-width: 991px)
    margin-top: 0
.doc-excerpt
  background-color: #fff
  padding: 20px 15px
  font-weight: bold
  font-size: 0.9rem
</style>
