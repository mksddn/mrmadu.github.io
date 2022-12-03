<template>
  <div class="review-item">
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

<style lang="sass" scoped></style>
