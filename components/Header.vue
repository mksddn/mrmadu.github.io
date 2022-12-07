<template>
  <header>
    <b-navbar class="navbar-top">
      <b-container>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group size="sm" class="navbar-search">
              <b-form-input type="search" placeholder="Поиск"></b-form-input>
              <b-input-group-append>
                <b-button size="sm" text="Search" variant="outline"
                  ><font-awesome-icon icon="fa-solid fa-search"
                /></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>
          <div class="nav-icons">
            <a href="/" class="vk">
              <font-awesome-icon icon="fa-brands fa-vk" color="#007bff" />
            </a>
            <a href="/" class="visimp">
              <font-awesome-icon icon="fa-solid fa-glasses" />
              <span>версия для слабовидящих</span>
            </a>
          </div>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <div id="sthead">
      <b-navbar toggleable="lg" type="light" class="navbar-middle">
        <b-container>
          <b-navbar-brand href="#">
            <img :src="logoUrl" alt="" />
          </b-navbar-brand>

          <div class="navbar-info-wrapper ml-auto">
            <div class="navbar-info">
              <div class="navbar-info-icon">
                <font-awesome-icon icon="fa-regular fa-clock" />
              </div>
              <div class="navbar-info-text">
                <span>Пн-Пт: 8:30 до 18:30</span>
                <span class="text-muted">Сб: 8:30 до 14:30, Вс: выходной</span>
              </div>
            </div>
            <div class="navbar-info">
              <div class="navbar-info-icon">
                <font-awesome-icon icon="fa-solid fa-mobile-screen" />
              </div>
              <div class="navbar-info-text">
                <span
                  ><a href="tel:8 (800) 100 76 32">8 (800) 100 76 32</a></span
                >
                <span
                  ><a href="mailto:info@mammae-clinic.ru"
                    >info@mammae-clinic.ru</a
                  ></span
                >
              </div>
            </div>
            <div class="navbar-info">
              <div class="navbar-info-icon">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
              </div>
              <div class="navbar-info-text">
                <span>г. Краснодар</span>
                <span class="text-muted">проезд Карасунский, д. 15/2</span>
              </div>
            </div>
          </div>
        </b-container>
      </b-navbar>

      <b-navbar class="navbar-bottom">
        <b-container>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="menu-main">
              <b-nav-item
                v-for="item in menuMain"
                :key="item.link"
                :href="item.link"
                >{{ item.title }}</b-nav-item
              >
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-container>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data: () => ({
    logoUrl: `/logo.png`,
    menuMain: [
      {
        title: 'О клинике',
        link: '/',
        submenu: [
          {
            title: 'Лицензии',
            link: '/',
          },
          {
            title: 'Вакансии',
            link: '/',
          },
          {
            title: 'Партнеры',
            link: '/',
          },
          {
            title: 'Отзывы',
            link: '/',
          },
          {
            title: 'Расписание',
            link: '/',
          },
        ],
      },
      {
        title: 'Коронавирус',
        link: '/',
      },
      {
        title: 'Услуги и цены',
        link: '/',
      },
      {
        title: 'Врачи',
        link: '/',
      },
      {
        title: 'Стационар',
        link: '/',
      },
      {
        title: 'Акции',
        link: '/',
      },
      {
        title: 'Новости',
        link: '/',
      },
      {
        title: 'Контакты',
        link: '/',
      },
      {
        title: 'Расписание',
        link: '/',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.myFunction)
    })
  },
  methods: {
    myFunction() {
      const header = document.getElementById('sthead')
      const sticky = header.offsetTop
      const main = document.querySelector('main.main')
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
        main.style.cssText = `padding-top: ${header.offsetHeight}px`
      } else {
        header.classList.remove('sticky')
        main.style.cssText = `padding-top: 0`
      }
    },
  },
}
</script>

<style lang="sass" scoped>

#sthead
  z-index: 90
  box-shadow: 0px 0 3px 0 #999
.sticky
  position: fixed
  top: 0
  width: 100%

.sticky + .content
  // padding-top: 102px


.navbar
  background-color: #fff
  &-top, &-middle, &-bottom
    border-top: 1px solid #ced4da
.navbar-top
  padding: 0
.navbar-search
  input
    border-top: 0
    border-bottom: 0
    border-right: 0
    height: 40px !important
  button
    border-right: 1px solid #ced4da
.nav-icons
  padding: 0 15px
  display: flex
  align-items: center
  line-height: 1
  font-size: 1.8rem
  a
    padding: 0 10px
    span
      font-size: 0.9rem
      margin-left: 5px
    &.visimp
      font-size: 1.2rem
      color: inherit
      display: flex
      align-items: center
    &:hover, &:hover svg
      color: $primary

.navbar-brand
  img
    max-width: 170px

.navbar-info-wrapper
  display: flex
.navbar-info
  display: inline-flex
  align-items: center
  margin-left: 20px
  &-text
    display: flex
    flex-direction: column
    font-size: 0.9rem
  &-icon
    font-size: 2.5rem
    color: #c73f2f
    margin-right: 10px
  a
    color: inherit

.menu-main
  li
    a
      text-transform: uppercase
      font-size: 1rem
      font-weight: bold
      font-size: 0.9rem
</style>
