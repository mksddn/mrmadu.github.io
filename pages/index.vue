<template>
  <div>
    <HeaderComp />
    <main class="main">
      <SliderHero />
      <SectionAbout />
      <SectionCTA />
      <SectionProducts title="Услуги и цены" bg />
      <SliderStaff />
      <SliderPosts />
      <SectionCreed />
      <SliderReviews />
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
  },
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
