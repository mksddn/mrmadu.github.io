<template>
  <b-card no-body img-top class="m-1">
    <b-link to="/">
      <b-card-img :src="img" :alt="title" />
    </b-link>
    <b-card-body>
      <h4>{{ title }}</h4>
      <!-- <b-button href="#" variant="primary">Подробнее</b-button> -->
      <b-button href="#" variant="primary">Подробнее</b-button>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped></style>
