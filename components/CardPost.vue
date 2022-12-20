<template>
  <b-card no-body img-top class="m-1">
    <b-link to="/">
      <b-card-img :src="thumbnail" :alt="title" />
    </b-link>
    <b-card-body>
      <b-link to="/post"><h4>{{ title }}</h4></b-link>
      <!-- <b-button href="#" variant="primary">Подробнее</b-button> -->
      <b-button to="/post" variant="primary">Подробнее</b-button>
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
    thumbnail: {
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
