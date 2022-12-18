<template>
  <article class="post-preview">
    <b-link :to="url" class="post-thumbnail"
      ><img :src="thumbnail" :alt="title"
    /></b-link>
    <b-link :to="url" class="post-title"
      ><h2>{{ title }}</h2></b-link
    >
    <div class="post-excerpt">{{ desc }}</div>
    <hr />
    <div class="post-btns">
      <b-link :to="url" class="post-link btn btn-primary"
        >Продолжить чтение</b-link
      >
      <ShareIcons />
    </div>
  </article>
</template>

<script>
import ShareIcons from './ShareIcons.vue'
export default {
  name: 'PostPreview',
  components: { ShareIcons },
  props: {
    title: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
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
.post-excerpt
  margin-bottom: 20px
.post-btns
  display: flex
  justify-content: space-between
  align-items: center
</style>
