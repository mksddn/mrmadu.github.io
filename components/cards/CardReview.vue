<template>
  <div class="review-item">
    <font-awesome-icon icon="fa-solid fa-quote-left" />
    <div class="review-text">{{ text }}</div>
    <div class="review-author">{{ author }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardReview',
  props: {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.review-item
  position: relative
.review-text
  padding: 15px
.review-author
  font-weight: bold
svg
  position: absolute
  left: -5px
  top: -15px
  font-size: 5rem
  color: var(--bg-soft)
  z-index: -1
</style>
