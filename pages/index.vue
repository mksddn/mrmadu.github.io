<template>
  <div>
    <HeaderComp />
    <main class="main">
      <SliderHero />
      <SectionAbout />
      <SectionCTA title="Запишитесь на прием!" btn-text="Записаться на прием" />
      <SectionProducts title="Услуги и цены" bg />
      <SliderStaff />
      <SliderPosts />
      <SectionCreed />
      <SliderReviews />
      <SectionCTA
        title="Запишитесь на прием!"
        btn-text="Записаться на прием"
        img-src="doc1.png"
      />
      <SectionFAQ />
    </main>
  </div>
</template>

<script>
import HeaderComp from '~/components/Header'
import SectionAbout from '~/components/SectionAbout'
import SectionCTA from '~/components/SectionCTA'
import SliderHero from '~/components/SliderHero'
import SliderStaff from '~/components/SliderStuff'
import SectionProducts from '~/components/SectionProducts'
import SliderPosts from '~/components/SliderPosts'
import SectionCreed from '~/components/SectionCreed'
import SectionFAQ from '~/components/SectionFAQ'
export default {
  name: 'IndexPage',
  components: {
    HeaderComp,
    SectionAbout,
    SectionCTA,
    SliderHero,
    SliderStaff,
    SectionProducts,
    SliderPosts,
    SectionCreed,
    SectionFAQ,
  },
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
