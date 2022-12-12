<template>
  <div>
    <HeaderFront />
    <main class="main">
      <Nuxt />
      <SectionCreed />
      <SliderPosts />
      <SectionCTA
        form
        img-btm
        title="Запишитесь на прием!"
        btn-text="Записаться на прием"
      />
    </main>
    <FooterFront />
  </div>
</template>
<script>
import SectionCTA from '~/components/SectionCTA'
import SliderPosts from '~/components/SliderPosts'
import SectionCreed from '~/components/SectionCreed'
export default {
  components: {
    SectionCTA,
    SliderPosts,
    SectionCreed,
  },
}
</script>
