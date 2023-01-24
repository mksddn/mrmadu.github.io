<template>
  <b-card no-body img-top class="mb-5">
    <b-link :to="`/${post.slug}`">
      <b-card-img-lazy v-if="post.fimg_url" :src="post.fimg_url" :alt="post.title.rendered" />
    </b-link>
    <b-card-body>
      <b-link :to="`/${post.slug}`" class="post-title"
        ><h2>{{ post.title.rendered }}</h2></b-link
      >
      <div class="card-text post-excerpt" v-html="post.excerpt.rendered" />
      <hr />
      <div class="post-btns">
        <b-link :to="`/${post.slug}`" class="post-link btn btn-primary"
          >Продолжить чтение</b-link
        >
        <ShareIcons />
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardPostArchive',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.post-preview
  margin-bottom: 60px
.post-thumbnail img
  margin-bottom: 20px
  border: 1px solid #dadada
  transition: 0.2s all
  &:hover
    box-shadow: 2px 2px 3px 0 #dadada
.post-title
  margin-bottom: 20px
  display: block
  text-decoration: none
  *
    font-weight: bold
.post-excerpt
  margin-bottom: 20px
.post-btns
  display: flex
  justify-content: space-between
  align-items: center
</style>
