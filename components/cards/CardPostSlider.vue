<template>
  <b-card no-body img-top class="m-1">
    <b-link :to="`/${post.slug}`">
      <b-card-img-lazy :src="post.fimg_url" :alt="post.title.rendered" />
    </b-link>
    <b-card-body>
      <b-link :to="`/${post.slug}`" class="post-link btn btn-primary btn-circle">+</b-link>
      <b-link :to="`/${post.slug}`" class="post-title"><h4>{{ post.title.rendered }}</h4></b-link>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardPostSlider',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
img
  width: 100%
  height: 150px
.post-title
  display: inline-block
  margin-top: 10px
  color: inherit !important
  &:hover
    color: var(--primary) !important
  *
    font-size: 1rem
.btn.post-link
  border-radius: 50% !important
  width: 40px
  height: 40px
  font-size: 1.8rem
  // font-weight: 200
  line-height: 1
  padding: 3px 0 !important
  position: absolute
  top: 130px
  left: 10px
</style>
