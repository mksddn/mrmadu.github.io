<template>
  <section id="addInfo">
    <b-container>
      <b-row>
        <b-col>
          <b-link to="/"
            >Сведения о национальном календаре профилактических прививок и
            календаре профилактических прививок по эпидпоказаниям</b-link
          >
          <p>
            Адрес и контактные данные ТФОМС: 350020, Краснодар, ул. Красная 178
            <br />
            E-mail: tfomskk@kubanoms.ru
            <br />
            Горячая линия: 8-800-200-60-50 (круглосуточно) Телефон: (861)
            215-24-62
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionAddinfo',
}
</script>

<style lang="sass" scoped>
.container
  border-left: 1px solid rgba(0,0,0,.1)
a
  font-weight: bold
  margin-bottom: 20px
  display: block
  color: inherit
p
  margin: 0
</style>
