<template>
  <b-card no-body img-top class="m-2">
    <b-link :to="`/staff/${post.slug}`">
      <b-card-img-lazy :src="post.fimg_url" :alt="post.title.rendered" />
    </b-link>
    <b-card-body>
      <h4>{{ post.title.rendered }}</h4>
      <div class="card-text" v-html="post.excerpt.rendered" />
      <b-link :to="`/staff/${post.slug}`">Подробнее</b-link>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardStaff',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.card-text
  font-size: 0.8rem
</style>
