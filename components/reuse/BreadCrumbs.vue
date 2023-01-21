<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Главная',
          href: '#',
        },
        {
          text: 'Родительская',
          href: '#',
        },
        {
          text: 'Текущая',
          active: true,
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.breadcrumb
  background: none
  color: #fff
  margin-bottom: 0
  margin-left: 0
  padding-left: 0
  a
    color: #b2b2b2
.breadcrumb-item.active
  display: none
</style>
