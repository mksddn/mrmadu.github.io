<template>
  <section class="cta">
    <b-container>
      <b-row>
        <b-col md="3">
          <img src="doctor.png" alt="">
        </b-col>
        <b-col md="9">
          <h3 class="cta-title">Запишитесь на прием!</h3>
          <p class="cta-text">Мы свяжемся с Вами, чтобы уточнить подробности</p>
          <BaseFormSimple btn-title="Записаться на прием" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionCTA',
}
</script>

<style lang="sass" scoped>
.cta
  background-image: url('static/bgn-grad.png')
  background-color: $primary
  background-size: cover
  background-position: 50% 50%
  color: #fff
  padding-bottom: 0
  &-title
    font-size: 2rem
    text-transform: uppercase
    font-weight: bold
</style>
