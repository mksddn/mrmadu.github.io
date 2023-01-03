<!-- eslint-disable vue/no-v-html -->
<template>
  <footer>
    <section class="footer">
      <b-container>
        <b-row>
          <b-col lg="4" class="mb-4 mb-lg-0">
            <b-nav vertical>
              <b-nav-item v-for="(item, index) in menu" :key="index">{{
                item.title
              }}</b-nav-item>
            </b-nav>
          </b-col>
          <b-col lg="4" class="mb-4 mb-lg-0">
            <div class="widget">
              <img :src="about.logo" alt="" />
              <div v-html="about.text" />
            </div>
            <div class="widget">
              <script src="https://vk.com/js/api/openapi.js?168"></script>
              <div id="vk_groups"></div>
              <script>
                VK.Widgets.Group(
                  'vk_groups',
                  { mode: 3, no_cover: 1, width: '340' },
                  73108189
                )
              </script>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="widget">
              <img src="/star.png" alt="" /><br />
              <a href="https://yandex.ru/maps/-/CCUqfCQh1C" target="_blank"
                ><b>выбор пользователей Яндекса - 2020</b></a
              >
            </div>
            <div class="widget">
              <div id="pd_widget_column" data-lpu="20934">
                <a target="_blank" href="https://prodoctorov.ru/"
                  ><img
                    class="pd_logo"
                    src="https://prodoctorov.ru/static/logo_widget.png"
                /></a>
                <a
                  target="_blank"
                  class="pd_lpu_name"
                  href="https://prodoctorov.ru/krasnodar/lpu/20934-mamme/"
                  >Клиника «Маммэ»</a
                >

                <div id="pd_widget_column_content"></div>
                <a
                  target="_blank"
                  href="https://prodoctorov.ru/krasnodar/lpu/20934-mamme/#otzivi"
                  >читать отзывы</a
                >
                <script src="https://prodoctorov.ru/static/js/widget_column.js"></script>
              </div>
            </div>
            <div class="widget">
              <div class="ya-widget" style="height: 50px">
                <iframe
                  src="https://yandex.ru/sprav/widget/rating-badge/1262911293"
                  width="150"
                  height="50"
                  frameborder="0"
                ></iframe>
              </div>
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
            <a href="/" class="vk">
              <font-awesome-icon icon="fa-brands fa-vk" color="#007bff" />
            </a>
            <a href="/" class="visimp">
              <font-awesome-icon icon="fa-solid fa-glasses" />
              <span>версия для слабовидящих</span>
            </a>
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
    menu: [
      {
        title: 'О клинике',
        link: '/',
      },
      {
        title: 'Лицензии',
        link: '/',
      },
      {
        title: 'Отзывы',
        link: '/',
      },
      {
        title: 'Вакансии',
        link: '/',
      },
      {
        title: 'Врачи',
        link: '/',
      },
    ],
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
    color: inherit
.nav-link
  padding: 0
  margin-bottom: 5px
.widget
  margin-bottom: 20px
  @media (max-width: 992px)
    margin-bottom: 1.5rem
  img
    max-width: 100px
    margin-bottom: 10px
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
      margin: 0 10px
    .vk svg
      font-size: 2rem
    .visimp svg
      margin-right: 2px

@media (max-width: 992px)
  #pd_widget_column
    margin: auto
</style>
