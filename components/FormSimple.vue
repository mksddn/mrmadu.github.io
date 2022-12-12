<template>
  <b-form>
    <b-container fluid>
      <b-row class="align-items-end">
        <b-col lg="4">
          <b-form-group
            id="input-group-name"
            label="Ваше имя:"
            label-for="input-name"
            class="mb-4"
          >
            <b-form-input
              id="input-name"
              v-model="name"
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
            label-for="input-tel"
            class="mb-4"
          >
            <b-form-input
              id="input-tel"
              v-model="tel"
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
    </b-container>
  </b-form>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
      default: 'Отправить',
    },
  },
  data: () => ({
    name: '',
    tel: '',
  }),
}
</script>

<style lang="sass" scoped>
form .container-fluid
  padding: 0
.btn-light
  background-color: #fff
</style>
