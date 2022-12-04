<template>
  <section class="cta">
    <b-container>
      <b-row>
        <b-col md="3">
          <img :src="imgSrc" :alt="title" />
        </b-col>
        <b-col md="9">
          <h3 class="cta-title">{{ title }}</h3>
          <p class="cta-text">{{ subtitle }}</p>
          <BaseFormSimple :btn-title="btnText" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionCTA',
  props: {
    title: {
      type: String,
      default: 'Отправьте заявку!',
    },
    subtitle: {
      type: String,
      default: 'Мы свяжемся с Вами, чтобы уточнить подробности',
    },
    imgSrc: {
      type: String,
      default: 'doctor.png',
    },
    btnText: {
      type: String,
      default: 'Отправить',
    },
  },
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
