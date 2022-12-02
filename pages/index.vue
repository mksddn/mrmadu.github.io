<template>
  <div>
    <HeaderComp />
    <main class="main">
      <SliderHero />
      <HomeAbout />
      <CTA />
      <ProductsComp title="Услуги и цены" bg />
      <SliderStaff />
    </main>
  </div>
</template>

<script>
import HeaderComp from '~/components/Header'
import HomeAbout from '~/components/home/About'
import CTA from '~/components/CTA'
import SliderHero from '~/components/home/SliderHero'
import SliderStaff from '~/components/home/SliderStuff'
import ProductsComp from '~/components/Products'
export default {
  name: 'IndexPage',
  components: {
    HeaderComp,
    HomeAbout,
    CTA,
    SliderHero,
    SliderStaff,
    ProductsComp,
  },
}
</script>

<style lang="scss">
@import 'static/custom.sass';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
</style>
