<template>
  <!-- <div class="mode-wrapper" @click="changeMode">
    <div ref="snlg" :class="{'active-logo' : $store.state.darkMode === false}" class="sun mode-icon">
      <font-awesome-icon icon="fa-solid fa-sun" />
    </div>
    <div ref="mnlg" :class="{'active-logo' : $store.state.darkMode === true}" class="moon logo mode-icon">
      <font-awesome-icon icon="fa-solid fa-moon" />
    </div>
  </div> -->
  <div class="mode-toggle"></div>
</template>

<script>
export default {
  name: 'ModeToggle',
  mounted() {
    const body = document.querySelector('body')
    const toggle = document.querySelector('.mode-toggle')

    const getMode = localStorage.getItem('mode')
    if (getMode && getMode === 'dark') {
      body.classList.add('dark')
      toggle.classList.add('active')
    }

    toggle.addEventListener('click', () => {
      body.classList.toggle('dark')

      if (!body.classList.contains('dark')) {
        return localStorage.setItem('mode', 'light')
      }
      localStorage.setItem('mode', 'dark')
    })

    toggle.addEventListener('click', () => toggle.classList.toggle('active'))
  },
  methods: {
    // changeMode() {
    //   document.querySelector('.active-logo').classList.toggle('animate-sun')
    //   document.querySelector('.logo').classList.toggle('animate-moon')
    //   document.querySelector('body').classList.toggle('dark')
    // },
  },
}
</script>

<style lang="sass" scoped>
.mode-toggle
  position: relative
  height: 25px
  width: 50px
  border-radius: 100px
  // border: 1px solid #939393
  background-color: var(--bg-main)
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)
  cursor: pointer
.mode-toggle::before
  content: ''
  background: #dfcd00 url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E/svg/ic-sun%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='ic-sun' fill-rule='nonzero' fill='%234A4A4A'%3E%3Cpath d='M12,19 C8.13400675,19 5,15.8659932 5,12 C5,8.13400675 8.13400675,5 12,5 C15.8659932,5 19,8.13400675 19,12 C19,15.8659932 15.8659932,19 12,19 Z M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z M11,1.99895656 C11,1.44724809 11.4438648,1 12,1 C12.5522847,1 13,1.44266033 13,1.99895656 L13,3.00104344 C13,3.55275191 12.5561352,4 12,4 C11.4477153,4 11,3.55733967 11,3.00104344 L11,1.99895656 Z M18.3646989,4.22108758 C18.7548157,3.83097078 19.3849276,3.82857845 19.7781746,4.22182541 C20.1686989,4.6123497 20.1722733,5.24194031 19.7789124,5.63530115 L19.07033,6.34388357 C18.6802132,6.73400038 18.0501012,6.73639271 17.6568542,6.34314575 C17.26633,5.95262146 17.2627556,5.32303085 17.6561164,4.92967001 L18.3646989,4.22108758 Z M22.0010434,11 C22.5527519,11 23,11.4438648 23,12 C23,12.5522847 22.5573397,13 22.0010434,13 L20.9989566,13 C20.4472481,13 20,12.5561352 20,12 C20,11.4477153 20.4426603,11 20.9989566,11 L22.0010434,11 Z M19.7789124,18.3646989 C20.1690292,18.7548157 20.1714215,19.3849276 19.7781746,19.7781746 C19.3876503,20.1686989 18.7580597,20.1722733 18.3646989,19.7789124 L17.6561164,19.07033 C17.2659996,18.6802132 17.2636073,18.0501012 17.6568542,17.6568542 C18.0473785,17.26633 18.6769692,17.2627556 19.07033,17.6561164 L19.7789124,18.3646989 Z M13,22.0010434 C13,22.5527519 12.5561352,23 12,23 C11.4477153,23 11,22.5573397 11,22.0010434 L11,20.9989566 C11,20.4472481 11.4438648,20 12,20 C12.5522847,20 13,20.4426603 13,20.9989566 L13,22.0010434 Z M5.63530115,19.7789124 C5.24518434,20.1690292 4.61507236,20.1714215 4.22182541,19.7781746 C3.83130112,19.3876503 3.82772675,18.7580597 4.22108758,18.3646989 L4.92967001,17.6561164 C5.31978681,17.2659996 5.9498988,17.2636073 6.34314575,17.6568542 C6.73367004,18.0473785 6.73724441,18.6769692 6.34388357,19.07033 L5.63530115,19.7789124 Z M1.99895656,13 C1.44724809,13 1,12.5561352 1,12 C1,11.4477153 1.44266033,11 1.99895656,11 L3.00104344,11 C3.55275191,11 4,11.4438648 4,12 C4,12.5522847 3.55733967,13 3.00104344,13 L1.99895656,13 Z M4.22108758,5.63530115 C3.83097078,5.24518434 3.82857845,4.61507236 4.22182541,4.22182541 C4.6123497,3.83130112 5.24194031,3.82772675 5.63530115,4.22108758 L6.34388357,4.92967001 C6.73400038,5.31978681 6.73639271,5.9498988 6.34314575,6.34314575 C5.95262146,6.73367004 5.32303085,6.73724441 4.92967001,6.34388357 L4.22108758,5.63530115 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
  background-size: contain
  background-size: 15px
  background-position: 50% 50%
  background-repeat: no-repeat
  position: absolute
  height: 20px
  width: 20px
  // background: #4070f4
  border-radius: 50%
  top: 50%
  left: 3px
  transform: translateY(-50%)
  transition: all 0.3s ease-in-out
.mode-toggle.active::before
  // background-color: #18191a
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg width='800px' height='800px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='none'%3E%3Cpath stroke='%23535358' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.294 5A11.19 11.19 0 1027 18.706s-5.723 2.19-10.81-2.897C11.105 10.723 13.295 5 13.295 5z'/%3E%3C/svg%3E")
  left: calc(100% - 10px - 14px)
// .mode-wrapper
//   cursor: pointer
//   position: relative
//   margin-left: 5px
// .sun, .moon
//   font-size: 1.3rem
//   width: fit-content
//   height: fit-content
//   color: #e7d100
// .moon
//   position: absolute
//   inset: 0
// .logo
//   opacity: 0
//   transform: translateY(20%) rotateZ(50deg)
//   transition: all 1s ease-out
// .active-logo
//   opacity: 1
//   transform: translateY(0) rotateZ(0deg)
//   transition: all 1s ease-out
// .animate-sun
//   opacity: 0
//   transform: translateY(20%) rotateZ(100deg)
// .animate-moon
//   opacity: 1
//   transform: translateY(0%) rotateZ(0deg)
</style>
