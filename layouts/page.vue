<template>
  <div>
    <TheHeader />
    <main class="main">
      <Nuxt />
      <SectionCreed />
      <SectionPosts />
      <SectionCTA
        form
        img-btm
        title="Запишитесь на прием!"
        btn-text="Записаться на прием"
      />
    </main>
    <TheFooter />
  </div>
</template>
<script>
export default {}
</script>
