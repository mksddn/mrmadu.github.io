<template>
  <section class="cta">
    <b-container>
      <b-row>
        <b-col
          md="3"
          class="d-none d-md-block"
          :class="{ 'align-self-end': imgBtm }"
        >
          <img :src="imgSrc" :alt="title" />
        </b-col>
        <b-col md="9" class="cta-content">
          <h3 class="cta-title">{{ title }}</h3>
          <p class="cta-text">{{ subtitle }}</p>
          <FormSimple v-if="form" :btn-title="btnText" />
          <a v-if="btnLink" :href="btnLink" class="btn btn-light">{{
            btnText
          }}</a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionCTA',
  props: {
    form: {
      type: Boolean,
      default: false,
    },
    imgBtm: {
      type: Boolean,
      default: false,
    },
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
      default: '/doctor.png',
    },
    btnText: {
      type: String,
      default: 'Отправить',
    },
    btnLink: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="sass" scoped>
.cta
  background-image: url('static/bgn-grad.png')
  background-color: var(--primary)
  background-size: cover
  background-position: 50% 50%
  color: #fff
  padding-bottom: 0
  &-content
    margin-bottom: 60px
  &-title
    font-size: 2rem
    text-transform: uppercase
    font-weight: bold
</style>
