<template>
  <section class="error-page">
    <b-container>
      <b-row>
        <b-col>
          <h3 class="suptitle">Что-то пошло не так</h3>
          <br>
          <h1 v-if="error.statusCode === 404" class="title">Ошибка 404</h1>
          <h1 v-else class="title">An error occurred</h1>
          <br>
          <hr />
          <br>
          <NuxtLink to="/">Перейти к главной странице </NuxtLink>
          <br>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  layout: 'post',
  props: ['error'],
}
</script>

<style lang="sass" scoped>
.error-page
  text-align: center
  padding: 180px 0
  background-image: url('../static/plug.png')
  background-repeat: no-repeat
  background-position: 20% 150%
.title
  font-size: 4rem
  font-weight: bold
.suptitle
  font-size: 1.4rem
hr
  width: 100px
  color: var(--text-main)
</style>
