<template>
  <div>
    <SliderHero />
    <SectionAbout />
    <SectionCTA
      form
      img-btm
      title="Запишитесь на прием!"
      btn-text="Записаться на прием"
    />
    <div class="bg-image">
      <SectionProducts title="Услуги и цены" />
    </div>
    <SliderStaff />
    <SliderPosts />
    <SectionCreed />
    <SliderReviews />
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
import SectionAbout from '~/components/SectionAbout'
import SectionCTA from '~/components/SectionCTA'
import SliderHero from '~/components/SliderHero'
import SliderStaff from '~/components/SliderStuff'
import SectionProducts from '~/components/SectionProducts'
import SliderPosts from '~/components/SliderPosts'
import SectionCreed from '~/components/SectionCreed'
import SectionFAQ from '~/components/SectionFAQ'
import SectionFeats from '~/components/SectionFeats'
import SectionContacts from '~/components/SectionContacts'
import SectionAddinfo from '~/components/SectionAddinfo'

export default {
  name: 'IndexPage',
  components: {
    SectionAbout,
    SectionCTA,
    SliderHero,
    SliderStaff,
    SectionProducts,
    SliderPosts,
    SectionCreed,
    SectionFAQ,
    SectionFeats,
    SectionContacts,
    SectionAddinfo,
  },
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
