<template>
  <section id="about">
    <b-container>
      <BaseTitleSection title="О клинике" />
      <b-row>
        <!-- <b-col>
          <img src="/youtube.jpg" alt="" class="yt-thumb">
        </b-col> -->
        <b-col lg="8">
          <img
            src="/youtube.jpg"
            alt=""
            class="yt-thumb"
            @click="$bvModal.show('bv-modal-youtube')"
          />
          <b-modal id="bv-modal-youtube" size="lg" hide-footer hide-header>
            <b-embed
              type="embed"
              aspect="16by9"
              src="https://www.youtube.com/embed/243Qj-nDK-g"
              allowfullscreen
            ></b-embed>
          </b-modal>
          <p>
            Многопрофильная клиника «МАММЭ» находится в Краснодаре. В ней 17
            отделений, которые осуществляют все виды комплексной диагностики и
            хирургии, в том числе эстетические и реконструктивные операции.
            Абсолютное большинство врачей имеют высшую квалификационную
            категорию. В собственной оборудованной лаборатории мы можем точно и
            оперативно диагностировать различные заболевания, а в круглосуточном
            стационаре — обеспечивать комфорт, квалифицированный уход и
            всестороннюю реабилитацию. Запишитесь на прием по телефонам: 8 800
            100 76 32 или 8 (861) 299 53 23, 8 (861) 299 53 24, 8 (861) 299 53
            25
          </p>
        </b-col>
        <b-col>
          <b-card
            bg-variant="light"
            img-src="/heart-health.jpg"
            img-alt="Image"
            img-top
            img-height="150"
            class="mb-2 about-btns"
          >
            <!-- <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text> -->
            <b-button href="#" variant="primary" class="mb-2" size="sm"
              >Прейскурант на услуги клиники</b-button
            >
            <b-button href="#" variant="outline-secondary" class="mb-2" size="sm"
              >Расписание на этот месяц</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionAbout',
}
</script>

<style lang="sass" scoped>
.yt-thumb
  max-width: 350px
  display: inline
  float: left
  margin-right: 15px
  margin-bottom: 15px
  cursor: pointer
.about-btns
  .btn
    text-transform: uppercase
    font-weight: 600
p
  font-size: 0.9rem
</style>
