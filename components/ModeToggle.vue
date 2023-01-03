<template>
  <div class="mode-wrapper" @click="changeMode">
    <div ref="snlg" class="sun active-logo mode-icon">
      <font-awesome-icon icon="fa-solid fa-sun" />
    </div>
    <div ref="mnlg" class="moon logo mode-icon">
      <font-awesome-icon icon="fa-solid fa-moon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModeToggle',
  methods: {
    changeMode() {
      document.querySelector('.active-logo').classList.toggle('animate-sun')
      document.querySelector('.logo').classList.toggle('animate-moon')
      document.querySelector('body').classList.toggle('dark')
    },
  },
}
</script>

<style lang="sass" scoped>
.mode-wrapper
  cursor: pointer
  position: relative
  margin-left: 5px
.sun, .moon
  font-size: 1.3rem
  width: fit-content
  height: fit-content
  color: #e7d100
.moon
  position: absolute
  inset: 0
.logo
  opacity: 0
  transform: translateY(20%) rotateZ(50deg)
  transition: all 1s ease-out
.active-logo
  opacity: 1
  transform: translateY(0) rotateZ(0deg)
  transition: all 1s ease-out
.animate-sun
  opacity: 0
  transform: translateY(20%) rotateZ(100deg)
.animate-moon
  opacity: 1
  transform: translateY(0%) rotateZ(0deg)
</style>
