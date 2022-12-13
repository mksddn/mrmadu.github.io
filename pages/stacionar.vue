<template>
  <div>
    <BaseTitlePage :title="title" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col>
            <p>
              В клинике МАММЭ работает круглосуточный стационар с палатами
              интенсивной терапии и 2-3-4 местными палатами.
            </p>
            <p>
              Пациенты находятся под постоянным наблюдением персонала,
              осуществляется санитарный уход, обеспечивается трехразовое горячее
              питание.
            </p>
            <p>
              При амбулаторном лечении круглосуточное пребывание в стационаре не
              обязательно.
            </p>
            <p>
              Посещение больных в стационаре осуществляется с 14:00 до 18:30 в
              будние дни и с 10 до 14:00 в выходные.
            </p>
          </b-col>
        </b-row>
      </b-container>
      <br />
      <hr />
      <br />
      <b-container>
        <b-row>
          <b-col>
            <h3>Фотогалерея</h3>
            <br />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <SliderGallery />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import SliderGallery from '../components/SliderGallery.vue'

export default {
  components: { SliderGallery },
  layout: 'page',
  data: () => ({
    title: 'Стационар',
  }),
}
</script>

<style lang="sass" scoped></style>
