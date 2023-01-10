<template>
  <div class="visimp-panel">
        <b-container>
          <b-row class="justify-center">
            <b-col class="visimp-col visimp-size">
              <a href="#0" title="Нормальный размер шрифта" class="visimp-x1 active">А</a>
              <a href="#0" title="Увеличенный размер шрифта" class="visimp-x2">А</a>
              <a href="#0" title="Большой размер шрифта" class="visimp-x3">А</a>
            </b-col>
            <b-col class="visimp-col visimp-color">
              <a href="#0" title="Цветовая схема: Черным по белому" class="visimp-light active">Ц</a>
              <a href="#0" title="Цветовая схема: Белым по черному" class="visimp-dark">Ц</a>
              <a href="#0" title="Цветовая схема: Темно-синим по голубому" class="visimp-blue">Ц</a>
            </b-col>
            <b-col class="visimp-col visimp-img">
              <a href="#0" title="Включить изображения" class="visimp-img-on"><font-awesome-icon icon="fa-solid fa-palette" /></a>
              <a href="#0" title="Черно-белые изображения" class="visimp-img-wb active"><font-awesome-icon icon="fa-solid fa-image" /></a>
              <a href="#0" title="Отключить изображения" class="visimp-img-off"><font-awesome-icon icon="fa-regular fa-note-sticky" /></a>
            </b-col>
          </b-row>
        </b-container>
      </div>
</template>

<script>
  export default {
    name: 'VisimpPanel'
  }
</script>

<style lang="sass" scoped>
.visimp-panel
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
    &-x1
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
    &-light
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
      // background-color: #000
      // color: #fff
  .active
    font-size: 2rem
  a:hover
    font-size: 2rem
  // a, a:hover, svg, svg:hover
  //   transition: all ease 0.9s !important
</style>