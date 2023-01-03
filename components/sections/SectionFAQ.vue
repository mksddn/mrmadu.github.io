<template>
  <section id="faq">
    <b-container>
      <TitleSection title="Вопрос-ответ" />
      <b-row>
        <b-col>
          <div class="accordion" role="tablist">
            <b-card v-for="(item, index) in $store.state.homePage.acf.faq" :key="index" no-body>
              <b-card-header
                v-b-toggle="'accordion-' + index"
                header-tag="header"
                class="p-2"
                role="tab"
              >
                <span class="faq-btn">{{ item.faq_question }}</span>
                <svg
                  class="faq-icon"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 10"
                  aria-hidden="true"
                >
                  <path
                    d="M15 1.2l-7 7-7-7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </b-card-header>
              <b-collapse :id="'accordion-' + index" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ item.faq_answer }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionFAQ',
}
</script>

<style lang="sass" scoped>
.card-header
  display: flex !important
  justify-content: space-between
  cursor: pointer
  transition: all 0.2s
.collapsed .faq-icon
    transform: rotate(0deg)
.not-collapsed
  background-color: var(--primary)
  color: #fff
  .faq-icon
    color: #fff
.faq-btn
    max-width: 85%
    font-weight: bold
    padding: 10px
.faq-icon
  width: 20px
  margin-right: 15px
  color: var(--primary)
  transform: rotate(90deg)
  transition: all 0.2s
.card-text:last-child
  margin-bottom: 20px
</style>
