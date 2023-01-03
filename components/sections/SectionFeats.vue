<template>
  <section id="feats">
    <b-container>
      <TitleSection title="Доступность клиники" />
      <b-row>
        <b-col
          v-for="(item, index) in feats"
          :key="index"
          md="3"
          class="feats-item mb-5"
        >
          <font-awesome-icon :icon="item.icon" />
          <span>{{ item.text }}</span>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionFeats',
  data: () => ({
    feats: [
      {
        icon: 'fa-solid fa-hospital',
        text: 'Возможно перемещение по клинике на лифте',
      },
      {
        icon: 'fa-solid fa-wheelchair',
        text: 'Доступность клиники для инвалидов-колясочников',
      },
      {
        icon: 'fa-solid fa-square-parking',
        text: 'Наличие парковки',
      },
      {
        icon: 'fa-solid fa-baby-carriage',
        text: 'Доступность клиники для детских колясок',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.feats-item
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  &:hover svg
    color: #888
  svg
    font-size: 4rem
    color: var(--grey)
    margin-bottom: 20px
    transition: color 0.2s
  span
    line-height: 1.2
    max-width: 280px
</style>
