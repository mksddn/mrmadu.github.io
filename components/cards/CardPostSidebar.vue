<template>
  <div class="post-item">
    <b-link :to="`/${post.slug}`"
      ><img :src="post.fimg_url" :alt="post.title.rendered" class="post-img"
    /></b-link>
    <div class="post-info">
      <span class="post-date">{{ filterData }}</span>
      <b-link :to="`/${post.slug}`"
        ><h4 class="post-title">{{ post.title.rendered }}</h4></b-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPostSidebar',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    filterData() {
      return new Date(this.post.date).toLocaleDateString('ru-RU')
    },
  },
}
</script>

<style lang="sass" scoped>
.post-item
  display: flex
  margin-bottom: 15px
a:has(.post-img)
  width: 80px
  min-width: 80px
  height: 80px
  margin-right: 10px
.post-img
  height: 100%
.post-date
  font-size: 0.8rem
  color: #888
  line-height: 1
.post-title
  font-size: 0.9rem
.post-info
  display: flex
  flex-direction: column
.post-date
  margin-bottom: 5px
</style>
