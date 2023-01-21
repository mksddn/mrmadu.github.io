<template>
  <div class="visimp-panel">
    <b-container>
      <b-row class="justify-center">
        <b-col class="visimp-col visimp-size">
          <a
            href="#0"
            title="Нормальный размер шрифта"
            class="visimp-x1 active"
            @click.prevent="setSize($event, 'text-x1')"
            >А</a
          >
          <a
            href="#0"
            title="Увеличенный размер шрифта"
            class="visimp-x2"
            @click.prevent="setSize($event, 'text-x2')"
            >А</a
          >
          <a
            href="#0"
            title="Большой размер шрифта"
            class="visimp-x3"
            @click.prevent="setSize($event, 'text-x3')"
            >А</a
          >
        </b-col>
        <b-col class="visimp-col visimp-color">
          <a
            href="#0"
            title="Цветовая схема: Черным по белому"
            class="visimp-light active"
            @click.prevent="setColor($event, 'light')"
            >Ц</a
          >
          <a
            href="#0"
            title="Цветовая схема: Белым по черному"
            class="visimp-dark"
            @click.prevent="setColor($event, 'dark')"
            >Ц</a
          >
          <!-- <a
            href="#0"
            title="Цветовая схема: Темно-синим по голубому"
            class="visimp-blue"
            @click.prevent="setColor($event, 'blue')"
            >Ц</a
          > -->
        </b-col>
        <b-col class="visimp-col visimp-img">
          <a
            href="#0"
            title="Отключить изображения"
            class="visimp-img-off"
            @click.prevent="setImg($event, 'img-off')"
            ><font-awesome-icon icon="fa-solid fa-xmark"
          /></a>
          <a
            href="#0"
            title="Черно-белые изображения"
            class="visimp-img-wb active"
            @click.prevent="setImg($event, 'img-wb')"
            ><font-awesome-icon icon="fa-solid fa-image"
          /></a>
          <a
            href="#0"
            title="Включить изображения"
            class="visimp-img-on"
            @click.prevent="setImg($event, 'img-on')"
            ><font-awesome-icon icon="fa-solid fa-palette"
          /></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'VisimpPanel',
  data: () => ({
    prefsArray: [
      'text-x1',
      'text-x2',
      'text-x3',
      'light',
      'dark',
      'blue',
      'img-off',
      'img-wb',
      'img-on',
    ],
  }),
  computed: {
    isVisimp() {
      return this.$store.state.visimp.active
    },
    visimpSize() {
      return this.$store.state.visimp.size
    },
    visimpColor() {
      return this.$store.state.visimp.color
    },
    visimpImg() {
      return this.$store.state.visimp.img
    },
  },
  mounted() {
    const body = document.body
    const visimpToggle = document.querySelector('.visimp-toggle')
    const modeToggle = document.querySelector('.mode-toggle')
    if (this.isVisimp) {
      body.classList.add(
        'visimp',
        this.visimpSize,
        this.visimpColor,
        this.visimpImg
      )
      modeToggle.style.display = 'none'
    }
    visimpToggle.addEventListener('click', () => {
      body.classList.toggle('visimp')
      if (body.classList.contains('visimp')) {
        body.classList.add(this.visimpSize, this.visimpColor, this.visimpImg)
      } else {
        body.classList.remove(...this.prefsArray)
      }
      modeToggle.style.display =
        modeToggle.style.display === 'none' ? '' : 'none'
    })
  },
  methods: {
    setSize(e, size) {
      this.$store.commit('SET_VISIMP_SIZE', size)
      document.body.classList.remove('text-x1', 'text-x2', 'text-x3')
      document.body.classList.add(size)
      document.querySelectorAll('.visimp-size a').forEach((el) => {
        el.classList.remove('active')
      })
      e.target.classList.add('active')
    },
    setColor(e, color) {
      this.$store.commit('SET_VISIMP_COLOR', color)
      document.body.classList.remove('light', 'dark', 'blue')
      document.body.classList.add(color)
      document.querySelectorAll('.visimp-color a').forEach((el) => {
        el.classList.remove('active')
      })
      e.target.classList.add('active')
    },
    setImg(e, img) {
      this.$store.commit('SET_VISIMP_IMG', img)
      document.body.classList.remove('img-off', 'img-wb', 'img-on')
      document.body.classList.add(img)
      document.querySelectorAll('.visimp-img a').forEach((el) => {
        el.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
    },
  },
}
</script>

<style lang="sass" scoped>
.visimp .visimp-panel
  display: block
.visimp-panel
  display: none
  font-size: 16px
.visimp-col
  display: flex
  justify-content: center
  align-items: center
  align-content: center
  a
    padding: 5px 10px
    margin: 5px
    cursor: pointer
    color: inherit
    &, svg
      transition: none !important
.visimp-size
  .visimp
    &-x2
      font-size: 24px
    &-x3
      font-size: 32px
  .active, a:hover
    background-color: #000
    color: #fff
.visimp-color
  font-weight: bold
  a
    border: 1px solid #000
  .visimp
    &-dark
      background-color: #000
      color: #fff
    &-blue
      background-color: #9dd1ff
      color: #063462
  .active, a:hover
    font-size: 140%
.visimp-img
  font-size: 1.3rem
  a
    padding: 0 5px
  .visimp-img
    &-on
      background: linear-gradient(45deg, var(--primary), #7eff00)
      color: #fff
    &-wb
      background-color: #000
      color: #fff
    &-off
      background-color: #000
      color: #fff
      padding: 0 10px
  .active
    font-size: 2rem
  a:hover
    font-size: 2rem
  // a, a:hover, svg, svg:hover
  //   transition: all ease 0.9s !important
</style>
