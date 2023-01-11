<template>
  <b-navbar-nav class="menu-main">
    <b-nav-item v-for="item in menuMain" :key="item.index" :to="item.link">{{
      item.title
    }}</b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data: () => ({
    menuMain: [
      {
        title: 'О клинике',
        link: '/about',
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
        link: '/uslugi',
      },
      {
        title: 'Врачи',
        link: '/staff',
      },
      {
        title: 'Стационар',
        link: '/stacionar',
      },
      {
        title: 'Акции',
        link: 'archive',
      },
      {
        title: 'Новости',
        link: '/news',
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
}
</script>

<style lang="sass" scoped>
.menu-main
  li
    a
      text-transform: uppercase
      font-size: 1rem
      font-weight: bold
      font-size: 0.9rem
</style>
