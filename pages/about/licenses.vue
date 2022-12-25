<template>
  <div>
    <TitlePage :title="title" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col lg="3">
            <SidebarAbout />
          </b-col>
          <b-col>
            <b-container>
              <b-row>
                <b-col v-for="(img, index) in imgs" :key="index" lg="4">
                  <img :src="img.src" :alt="img.alt" />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'page',
  data: () => ({
    title: 'Лицензии',
    imgs: [
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
