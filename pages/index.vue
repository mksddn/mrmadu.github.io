<template>
  <div>
    <SectionHero />
    <SectionAbout />
    <SectionCTA
      form
      img-btm
      title="Запишитесь на прием!"
      btn-text="Записаться на прием"
    />
    <div class="bg-image">
      <SectionServices />
    </div>
    <SectionStaff />
    <SectionPosts />
    <SectionCreed />
    <SectionReviews />
    <SectionCTA
      form
      img-btm
      title="Запишитесь на прием!"
      btn-text="Записаться на прием"
      img-src="doc1.png"
    />
    <SectionFAQ />
    <div class="bg-pattern">
      <SectionFeats />
    </div>
    <SectionCTA
      title="Хотите получить скидку на услуги?"
      subtitle="У нас есть специальная дисконтная программа"
      btn-text="Узнать больше"
      btn-link="/"
      img-src="cards.png"
    />
    <SectionContacts />
    <SectionAddinfo />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'home',
  // mounted() {
  //   // eslint-disable-next-line no-undef
  //   AOS.init()
  // },
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
