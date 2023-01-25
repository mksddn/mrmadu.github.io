<template>
  <section id="about">
    <b-container>
      <TitleSection title="О клинике" />
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
              :src="`${$store.state.homePage.acf.about_video}`"
              allowfullscreen
            ></b-embed>
          </b-modal>
          <p>
            {{ $store.state.homePage.acf.about_text }}
          </p>
        </b-col>
        <b-col>
          <b-card
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
            <b-button
              :to="`${$store.state.homePage.acf.about_price}`"
              variant="primary"
              block
              class="mb-2"
              size="sm"
              >Прейскурант на услуги клиники</b-button
            >
            <b-button
              to="/about/raspisanie"
              variant="outline-secondary"
              block
              class="mb-2"
              size="sm"
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
    font-weight: 500
p
  font-size: 0.9rem
.card.about-btns
  background-color: var(--bg-soft)
</style>
