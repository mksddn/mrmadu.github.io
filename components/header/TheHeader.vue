<template>
  <div>
    <!-- <GlobalStyles /> -->
    <header>
      <VisimpPanel />

      <b-navbar class="navbar-wrapper navbar-top">
        <b-container>
          <b-navbar-nav class="ml-auto">
            <HeaderSearch />
            <div class="nav-icons">
              <a href="#0" class="vk">
                <font-awesome-icon icon="fa-brands fa-vk" color="#007bff" />
              </a>
              <VisimpToggle />
              <ModeToggle />
            </div>
          </b-navbar-nav>
        </b-container>
      </b-navbar>

      <div id="sthead">
        <b-navbar toggleable="lg" class="wrapper-middle">
          <div class="navbar-wrapper navbar-middle">
            <b-container>
              <b-navbar-brand to="/" @click.prevent.stop="homeScrollTop">
                <img :src="logoUrl" alt="" />
              </b-navbar-brand>

              <div class="navbar-info-wrapper ml-auto d-none d-lg-flex">
                <div class="navbar-info">
                  <div class="navbar-info-icon">
                    <font-awesome-icon icon="fa-regular fa-clock" />
                  </div>
                  <div class="navbar-info-text">
                    <span>Пн-Пт: 8:30 до 18:30</span>
                    <span class="text-grey"
                      >Сб: 8:30 до 14:30, Вс: выходной</span
                    >
                  </div>
                </div>
                <div class="navbar-info">
                  <div class="navbar-info-icon">
                    <font-awesome-icon icon="fa-solid fa-mobile-screen" />
                  </div>
                  <div class="navbar-info-text">
                    <span
                      ><a href="tel:8 (800) 100 76 32"
                        >8 (800) 100 76 32</a
                      ></span
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
                    <span class="text-grey">проезд Карасунский, д. 15/2</span>
                  </div>
                </div>
              </div>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </b-container>
          </div>
          <div class="navbar-wrapper navbar-bottom">
            <b-container>
              <b-collapse id="nav-collapse" is-nav>
                <HeaderMenu />
              </b-collapse>
            </b-container>
          </div>
        </b-navbar>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data: () => ({
    // visimpActive: this.$store.state.visimp.active,
    logoUrl: `/logo.png`,
  }),
  mounted() {
    // document.body.classList.add('dark')
    this.$nextTick(() => {
      window.addEventListener('scroll', this.fixHeader)
    })

  },
  methods: {
    fixHeader() {
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
    homeScrollTop() {
      if (window.location.pathname === '/') {
        this.$scrollTo(document, 500)
        // console.log('scroll');
      } else {
        this.$router.push('/')
      }
    },
    // visimpToggle() {
    //   // const visimpActive = this.$store.state.visimp.active
    //   const visimpActive = {active: true}
    //   this.$store.commit('SET_VISIMP', visimpActive)
    // },
  },
}
</script>

<style lang="sass" scoped>

#sthead
  z-index: 90
  box-shadow: 0px 0 3px 0 var(--grey)
.sticky
  position: fixed
  top: 0
  width: 100%

.sticky + .content
  // padding-top: 102px

.navbar-nav
  align-items: center
  text-align: center

.navbar
  background-color: var(--bg-main)
  flex-direction: column
  &-wrapper
    border-bottom: 1px solid var(--grey)
.navbar-top
  padding: 0
  border-top: 1px solid var(--grey)
.navbar.wrapper-middle
  padding: 0
.navbar-middle, .navbar-bottom
  width: 100%
  padding: 10px 0
  .container
    flex-wrap: nowrap
.navbar-bottom
  padding: 0

.nav-icons
  padding: 0 15px
  display: flex
  align-items: center
  line-height: 1
  font-size: 1.8rem
  a
    padding: 0 10px
    &:hover, &:hover svg
      color: var(--primary)

.navbar-brand
  img
    max-width: 170px
.dark .navbar-brand img
  filter: drop-shadow(0px 0px 1px #fff)

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
    color: var(--primary)
    margin-right: 10px
  a
    color: inherit
  .text-grey
    color: var(--grey)
.collapse.show
  margin: 20px

// .visimp.dark
//   header, .navbar
//     background-color: #444
//     color: #fff
//   .navbar-info-icon
//     color: #fff
</style>
