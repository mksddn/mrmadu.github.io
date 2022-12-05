<template>
  <div>
    <SiteHeader />
    <main class="main">
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
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/Header'
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
import SiteFooter from '~/components/Footer'

export default {
  name: 'IndexPage',
  components: {
    SiteHeader,
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
    SiteFooter,
  },
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
