<template>
  <aside>
    <b-button
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      block
      variant="outline-dark"
      >{{ link.title }}</b-button
    >
    <b-button
      v-if="isSchedule"
      :to="scheduleLink"
      block
      variant="primary"
      >Скачать расписание</b-button
    >
  </aside>
</template>

<script>
export default {
  name: 'SidebarAbout',
  props: {
    isSchedule: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    scheduleLink: '/',
    links: [
      {
        title: 'Расписание',
        to: '/about/raspisanie',
      },
      {
        title: 'Регистрационные данные',
        to: '/about/registratsionnye-dannye',
      },
      {
        title: 'Правовая информация',
        to: '/about/pravovaya-informatsiya',
      },
      {
        title: 'Лицензии',
        to: '/about/licenses',
      },
      {
        title: 'Адреса и телефоны контролирующих организаций',
        to: '/about/adresa-i-telefony-kontroliruyushhih-organizatsij',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.btn
  text-align: left
  margin-bottom: 15px
  font-weight: 600
</style>
