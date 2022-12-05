<template>
  <footer>
    <section class="footer">
      <b-container>
        <b-row>
          <b-col lg="4">
            <b-nav vertical>
              <b-nav-item v-for="(item, index) in menu" :key="index">{{
                item.title
              }}</b-nav-item>
            </b-nav>
          </b-col>
          <b-col lg="4">
            <img :src="about.logo" alt="">
            <div v-html="about.text" />
          </b-col>
          <b-col lg="4">
            <div v-html="wdgtVK" />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="absolute-footer">
      <b-container>
        <b-row align-v="center">
          <b-col lg="4" class="copyright">
            <span>2011-{{ crntYear }} © Все права защищены</span>
          </b-col>
          <b-col lg="4" class="dev">
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
      logo: 'logo-min.png',
      text: `Общество с ограниченной ответственностью «Клиника МАММЭ» (ООО «Клиника МАММЭ»)
      <br>
      Лицензия на осуществление медицинской деятельности № ЛО-23-01-008447
      <br>
      8 800 100 76 32
      <br>
      Звонок по России бесплатный`,
    },
    wdgtVK: `<script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
    <div id="vk_groups"></div>
    <script type="text/javascript">
    VK.Widgets.Group("vk_groups", {mode: 3, no_cover: 1, width: "340"}, 73108189);
    </script>`,
  }),
}
</script>

<style lang="sass" scoped>
footer
  background-color: #f1f1f1
  a
    color: inherit
.nav-link
  padding: 0
  margin-bottom: 5px
.absolute-footer
  background-color: #fff
  padding: 15px 0
  font-size: 0.9rem
  .dev
    font-size: 0.7rem
    text-transform: uppercase
    text-align: center
  .nav-icons
    text-align: right
    display: flex
    align-items: center
    justify-content: flex-end
    svg
      font-size: 1rem
      margin: 0 10px
    .vk svg
      font-size: 2rem
</style>
