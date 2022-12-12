<template>
  <div>
    <BaseTitlePage :title="title" />
    <section id="pageContent">
      <b-container>
        <b-row>
          <b-col lg="3">
            <SidebarAbout />
          </b-col>
          <b-col>
            <p>
              Многопрофильная клиника «МАММЭ» находится в Краснодаре. В ней 17
              отделений, которые осуществляют все виды комплексной диагностики и
              хирургии, в том числе эстетические и реконструктивные операции.
              Абсолютное большинство врачей имеют высшую квалификационную
              категорию. В собственной оборудованной лаборатории мы можем точно
              и оперативно диагностировать различные заболевания, а в
              круглосуточном стационаре — обеспечивать комфорт,
              квалифицированный уход и всестороннюю реабилитацию.
            </p>
            <p>
              Клиника МАММЭ — это клиническая база Федерального маммологического
              центра (Москва). А также первая в России и единственная в ЮФО
              частная лицензированная клиника, где занимаются онкологической
              хирургией. Мы сотрудничаем с Ростовским НИИ онкологии и НИИ
              онкологии Санкт-Петербурга, организуем первичную профилактику
              наследственного/семейного рака молочной железы методом
              генетического типирования заболевания (выявление мутаций генов
              BRCA1 и 2).
            </p>
            <p>
              Кредо клиники: «Интересы пациента — прежде всего!». Современные
              способы диагностики и хирургии («хирургия одного дня») помогают в
              минимальный срок вернуть здоровье и красоту — благодаря
              технологиям и новым методам мы ежедневно успешно диагностируем
              заболевания и лечим пациентов.
            </p>
            <p>
              Сегодня каждый может позволить себе быть здоровым и красивым. И
              специалисты клиники «МАММЭ» готовы в этом помочь!
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
            <VueSlickCarousel v-bind="settings">
              <img
                v-for="(img, index) in photos"
                :key="index"
                :src="img.src"
                :alt="img.alt"
              />
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SidebarAbout from '~/components/SidebarAbout'
export default {
  components: {
    SidebarAbout,
    VueSlickCarousel,
  },
  layout: 'page',
  data: () => ({
    title: 'О клинике',
    photos: [
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
      {
        src: '/post.jpg',
        alt: '',
      },
    ],
    settings: {
      lazyLoad: 'ondemand',
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    },
  }),
}
</script>

<style lang="sass" scoped></style>
