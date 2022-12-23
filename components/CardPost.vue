<template>
  <b-card no-body img-top class="m-1">
    <b-link :to="`/${post.slug}`">
      <b-card-img :src="post.fimg_url" :alt="post.title.rendered" />
    </b-link>
    <b-card-body>
      <b-link :to="`/${post.slug}`"><h4>{{ post.title.rendered }}</h4></b-link>
      <!-- <b-button href="#" variant="primary">Подробнее</b-button> -->
      <b-button :to="`/${post.slug}`" variant="primary">Подробнее</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    post: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
img
  width: 100%
  height: 150px
</style>
