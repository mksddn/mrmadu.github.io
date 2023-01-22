<!-- eslint-disable vue/no-v-html -->
<template>
  <footer>
    <section class="footer">
      <b-container>
        <b-row>
          <b-col lg="4" class="mb-4 mb-lg-0">
            <FooterMenu />
          </b-col>
          <b-col lg="4" class="mb-4 mb-lg-0">
            <div class="widget">
              <img :src="about.logo" alt="" />
              <div v-html="about.text" />
            </div>
            <div class="widget">
              <WidgetVK />
            </div>
          </b-col>
          <b-col lg="4">
            <div class="widget">
              <WidgetYaPlace />
            </div>
            <div class="widget">
              <WidgetProDoc />
            </div>
            <div class="widget">
              <WidgetYaRate />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="absolute-footer">
      <b-container>
        <b-row align-v="center">
          <b-col lg="4" class="copyright mb-4 mb-lg-0">
            <span>2011-{{ crntYear }} © Все права защищены</span>
          </b-col>
          <b-col lg="4" class="dev mb-4 mb-lg-0">
            <a href="https://sunny-agency.ru" target="_blank"
              >Создание и поддержка сайта: Sunny Agency</a
            >
          </b-col>
          <b-col lg="4" class="nav-icons">
            <a href="/" class="vk mr-3">
              <font-awesome-icon icon="fa-brands fa-vk" color="#007bff" />
            </a>
            <VisimpToggle />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: () => ({
    crntYear: new Date().getFullYear(),
    about: {
      logo: '/logo-min.png',
      text: `Общество с ограниченной ответственностью «Клиника МАММЭ» (ООО «Клиника МАММЭ»)
      <br>
      Лицензия на осуществление медицинской деятельности <b>№ ЛО-23-01-008447</b>
      <br>
      <b>8 800 100 76 32</b>
      <br>
      Звонок по России бесплатный`,
    },
  }),
}
</script>

<style lang="sass" scoped>
footer
  background-color: var(--bg-soft)
  font-size: 0.9rem
  @media (max-width: 992px)
    text-align: center
    // align-items: center
    // align-content: center
    // justify-content: center
  a
    color: inherit !important
    &:hover
      color: var(--primary) !important
.nav-link
  padding: 0
  margin-bottom: 5px
.widget
  margin-bottom: 20px
  @media (max-width: 992px)
    margin-bottom: 1.5rem
  &:last-child
    margin-bottom: 0
.absolute-footer
  background-color: var(--bg-main)
  padding: 15px 0
  .dev
    font-size: 0.7rem
    text-transform: uppercase
    text-align: center
  .nav-icons
    text-align: right
    display: flex
    align-items: center
    justify-content: flex-end
    @media (max-width: 992px)
      justify-content: center
    svg
      font-size: 1rem
      // margin: 0 10px
    .vk svg
      font-size: 2rem
    .visimp svg
      margin-right: 2px

@media (max-width: 992px)
  #pd_widget_column
    margin: auto

// .visimp.dark
//   footer, .absolute-footer
//     background-color: #444
//     color: #fff
</style>
