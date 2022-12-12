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
  a
    color: #dadada
.breadcrumb-item.active
  display: none
</style>
