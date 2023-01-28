<template>
  <b-form ref="form" @submit.prevent="submitForm">
    <b-container fluid>
      <b-row class="align-items-end">
        <b-col lg="4">
          <b-form-group
            id="input-group-name"
            label="Ваше имя:"
            label-for="your-name"
            class="mb-4"
          >
            <b-form-input
              id="your-name"
              v-model="form.name"
              name="your-name"
              type="text"
              placeholder="Введите имя"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col lg="4">
          <b-form-group
            id="input-group-tel"
            label="Ваш телефон:"
            label-for="your-phone"
            class="mb-4"
          >
            <b-form-input
              id="your-phone"
              v-model="form.tel"
              name="your-phone"
              type="tel"
              placeholder="Номер телефона"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col lg="4">
          <b-form-group class="mb-4 mt-2 mt-lg-0">
            <b-button type="submit" variant="light">{{ btnTitle }}</b-button>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row v-if="errors.length">
        <b-col>
          <div class="errors">{{ errors }}</div>
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    btnTitle: {
      type: String,
      default: 'Отправить',
    },
  },
  data: () => ({
    form: {
      name: '',
      tel: '',
    },
    errors: [],
    url: `${process.env.VUE_APP_WP_API_URL}/contact-form-7/v1/contact-forms/1359/feedback`,
  }),
  methods: {
    submitForm() {
      const emailBody = {
        'your-name': this.form.name,
        'your-phone': this.form.tel,
        _url: 'test',
      }
      // console.log(emailBody)
      axios
        .post(this.url, emailBody, {
          headers: {
            'Content-Type': 'application/json; charset=utf8',
          },
        })
        .then((response) => {
          // console.log(response)
          this.errors = []
        })
        .catch((error) => {
          this.errors = error.response.data.message
          // console.log(error)
        })
        this.$refs.form.reset()
    },
  },
}
</script>

<style lang="sass" scoped>
form .container-fluid
  padding: 0
.errors
  display: inline
  padding: 10px
  border: 1px solid red
  background-color: #00000059
</style>
