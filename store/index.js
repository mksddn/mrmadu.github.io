// import axios from 'axios'

export const state = () => ({
  siteInfo: null,
  pageInfo: null,
  darkMode: false,
  visimp: {
    active: false,
    size: 'text-x1',
    color: 'light',
    img: 'img-wb',
  },
  // isVisimp: false,
  menuMain: null,
  menuFooter: null,
  homePage: null,
  pageSlugs: null,
  taxSlugs: null,
  posts: null,
  lastNews: null,
  currPost: null,
  allStaff: null,
  lastStaff: null,
  currDoc: null,
  services: null,
  currServ: null,
  allCats: null,
  allTags: null,
})

export const mutations = {
  SET_SITE_INFO: (state, data) => {
    state.siteInfo = data
  },
  SET_PAGE_INFO: (state, data) => {
    state.pageInfo = data
  },
  SET_DARK_MODE: (state, data) => {
    state.darkMode = data
  },
  SET_IS_VISIMP: (state, data) => {
    state.visimp.active = data
  },
  SET_VISIMP_SIZE: (state, data) => {
    state.visimp.size = data
  },
  SET_VISIMP_COLOR: (state, data) => {
    state.visimp.color = data
  },
  SET_VISIMP_IMG: (state, data) => {
    state.visimp.img = data
  },
  SET_MENU_MAIN: (state, data) => {
    state.menuMain = data
  },
  SET_MENU_FOOTER: (state, data) => {
    state.menuFooter = data
  },
  SET_HOME_PAGE: (state, data) => {
    state.homePage = data
  },
  SET_PAGE_SLUGS_TO_STATE: (state, data) => {
    state.pageSlugs = data
  },
  SET_TAX_SLUGS_TO_STATE: (state, data) => {
    state.taxSlugs = data
  },
  SET_POSTS_TO_STATE: (state, data) => {
    state.posts = data
  },
  SET_CURR_POST: (state, data) => {
    state.currPost = data
  },
  SET_LAST_NEWS: (state, data) => {
    state.lastNews = data
  },
  SET_ALL_STAFF: (state, data) => {
    state.allStaff = data
  },
  SET_LAST_STAFF: (state, data) => {
    state.lastStaff = data
  },
  SET_CURR_DOC: (state, data) => {
    state.currDoc = data
  },
  SET_SERVICES: (state, data) => {
    state.services = data
  },
  SET_CURR_SERV: (state, data) => {
    state.currServ = data
  },
  SET_ALL_CATS: (state, data) => {
    state.allCats = data
  },
  SET_ALL_TAGS: (state, data) => {
    state.allTags = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // SET SITE INFO
    const siteInfo = await this.$axios.get(`${process.env.VUE_APP_WP_API_URL}/`)
    commit('SET_SITE_INFO', siteInfo.data)
    // SET LIST OF PAGES
    const pages = await this.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/pages?per_page=99`
    )
    const pageSlugs = []
    pages.data.forEach((el) => {
      pageSlugs.push(el.slug)
    })
    commit('SET_PAGE_SLUGS_TO_STATE', pageSlugs)
    // SET LIST OF TAXONOMIES
    const cats = await this.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/categories?per_page=99`
    )
    const tags = await this.$axios.get(
      `${process.env.VUE_APP_WP_API_URL}/wp/v2/tags?per_page=99`
    )
    const taxes = [...cats.data, ...tags.data]
    const taxSlugs = []
    taxes.forEach((el) => {
      taxSlugs.push({
        slug: el.slug,
        id: el.id,
        name: el.name,
        type: el.taxonomy,
      })
    })
    commit('SET_TAX_SLUGS_TO_STATE', taxSlugs)
  },
  // GET_ARTICLES_FROM_API({ commit }) {
  //   return axios
  //     .get('https://mammae-clinic.ru/wp-json/wp/v2/posts')
  //     .then((articles) => {
  //       commit('SET_ARTICLES_TO_STATE', articles.data)
  //       return articles
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return error
  //     })
  // },
}

export const getters = {
  // ARTICLES: (state) => state.articles,
  // visimp: state => state.visimp
}
