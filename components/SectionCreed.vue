<template>
  <section id="creed">
    <b-container>
      <b-row>
        <b-col>
          <span v-animate-fadein class="creed-text"
            >Кредо клиники маммэ: «интересы пациента — прежде всего!»</span
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionCreed',
}
</script>

<style lang="sass" scoped>
#creed
  background-color: #f1f1f1
.creed-text
  text-transform: uppercase
  display: block
  text-align: center
  font-size: 1.5rem
  font-weight: bold
</style>
