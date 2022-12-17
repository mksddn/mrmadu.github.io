<template>
  <aside>
    <div class="wdgt wdgt-cats">
      <h3 class="wdgt-title">Категории</h3>
      <div v-for="cat in cats" :key="cat.link" class="cat-item">
        <b-link :to="cat.link"
          ><h4 class="cat-title">{{ cat.title }}</h4></b-link
        >
        <span class="cat-count">{{ cat.count }}</span>
      </div>
    </div>
    <div class="wdgt wdgt-posts">
      <h3 class="wdgt-title">Последние записи</h3>
      <div v-for="post in posts" :key="post.link" class="post-item">
        <b-link to="post"
          ><img :src="post.img" :alt="post.title" class="post-img"
        /></b-link>
        <div class="post-info">
          <span class="post-date">{{ post.date }}</span>
          <b-link to="post"
            ><h4 class="post-title">{{ post.name }}</h4></b-link
          >
        </div>
      </div>
    </div>
    <div class="wdgt wdht-tags">
      <h3 class="wdgt-title">Метки</h3>
      <TagItem
        v-for="tag in tags"
        :key="tag.url"
        :name="tag.title"
        :url="tag.url"
      />
    </div>
  </aside>
</template>

<script>
import TagItem from './TagItem.vue'
export default {
  name: 'SidebarBlog',
  components: { TagItem },
  data: () => ({
    cats: [
      {
        title: 'Акции',
        link: 'archive',
        count: '17',
      },
      {
        title: 'Новости',
        link: 'archive',
        count: '17',
      },
      {
        title: 'Прошедшие акции',
        link: 'archive',
        count: '17',
      },
      {
        title: 'Энциклопедия здоровья',
        link: 'archive',
        count: '17',
      },
    ],
    posts: [
      {
        id: '01',
        date: '07.12.2022',
        img: '/post.jpg',
        name: 'График работы в Новогодние праздники 2023',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '02',
        date: '07.12.2022',
        img: '/post.jpg',
        name: 'График работы в Новогодние праздники 2023',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
      {
        id: '03',
        date: '07.12.2022',
        img: '/post.jpg',
        name: 'График работы в Новогодние праздники 2023',
        text: 'Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты. Сбить которой текста жаренные пояс снова сих вершину, мир текстами свое маленький точках напоивший своего то переписали букв скатился свою!',
      },
    ],
    tags: [
      {
        title: 'Tag 1',
        url: 'archive',
      },
      {
        title: 'Tag 2',
        url: 'archive',
      },
      {
        title: 'Tag 3',
        url: 'archive',
      },
      {
        title: 'Tag 4',
        url: 'archive',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
// aside
//   padding: 30px 0
.wdgt
  margin-bottom: 60px
  &-title
    font-size: 1.3rem
    font-weight: 500
    margin-bottom: 30px
  a
    color: inherit
    text-decoration: none
  .cat-item
    display: flex
    justify-content: space-between
    border-bottom: 1px solid rgba(0,0,0,.07)
    margin-bottom: 15px
    transition: all 0.2s
    *
      font-size: 1rem
      font-weight: normal
    &:hover
      border-bottom-color: $primary
      a
        color: $primary
    a:has(.cat-title)
      width: 100%
  .cat-count
    font-weight: 500

  .post-item
    display: flex
    margin-bottom: 15px
  a:has(.post-img)
    width: 80px
    min-width: 80px
    height: 80px
    margin-right: 10px
  .post-img
    height: 100%
  .post-date
    font-size: 0.8rem
    color: #888
    line-height: 1
  .post-title
    font-size: 0.9rem
    color: $primary
    &:hover
      color: #333
  .post-info
    display: flex
    flex-direction: column
  .post-date
    margin-bottom: 5px
</style>
