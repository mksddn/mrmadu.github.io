<template>
  <section id="contacts" class="p-0">
    <MapYa />
    <b-container>
      <b-row>
        <!-- eslint-disable vue/no-v-html -->
        <b-col lg="3" md="7" class="contacts-wrapper offset-lg-1 offset-md-4">
          <div class="contacts-item">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <div>
              <h4>Адрес</h4>
              <span
                v-for="(item, index) in address"
                :key="index"
                v-html="item"
              />
            </div>
          </div>
          <div class="contacts-item">
            <font-awesome-icon icon="fa-solid fa-envelope-open-text" />
            <div>
              <h4>Email</h4>
              <span v-for="(item, index) in email" :key="index">
                <a :href="'mailto:' + item">{{ item }}</a>
              </span>
            </div>
          </div>
          <div class="contacts-item">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <div>
              <h4>Телефон</h4>
              <span v-for="(item, index) in tel" :key="index">
                <a :href="'tel:' + item">{{ item }}</a>
              </span>
            </div>
          </div>
          <div class="contacts-item">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <div>
              <h4>Часы работы</h4>
              <span
                v-for="(item, index) in schedule"
                :key="index"
                v-html="item"
              />
            </div>
          </div>
        </b-col>
        <!--eslint-enable-->
        <!-- <b-col>
          <MapYa />
        </b-col> -->
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'SectionContacts',
  data: () => ({
    address: [`г. Краснодар<br>проезд Карасунский, д. 15/2`],
    email: ['info@mammae-clinic.ru'],
    tel: [
      '8 (800) 100 76 32',
      '8 (861) 299 53 23',
      '8 (861) 299 53 24',
      '8 (861) 299 53 25',
    ],
    schedule: ['Пн-Пт: 8:30 до 18:30<br>Сб: 8:30 до 14:30, Вс: выходной'],
  }),
}
</script>

<style lang="sass" scoped>
#contacts
  position: relative
.contacts-wrapper
  padding: 50px 20px
  display: flex
  flex-direction: column
  justify-content: space-between
  background-color: var(--bg-main)
  z-index: 2
.contacts-item
  display: flex
  margin-bottom: 40px
  &:last-child
    margin-bottom: 0
  svg
    font-size: 2rem
    margin: 2px 15px 5px 0
  h4
    margin-bottom: 5px
    font-size: 1rem
    font-weight: bold
    text-transform: uppercase
  span
    font-size: 0.9rem
    line-height: 1.3
    display: block
  a
    color: inherit
</style>
