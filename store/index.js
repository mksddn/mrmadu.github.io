// import axios from 'axios'

export const state = () => ({
  darkMode: false,
  visimp: {
    active: false,
    size: 'text-x1',
    color: 'light',
    img: 'img-wb',
  },
  // isVisimp: false,
  homePage: null,
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
  SET_HOME_PAGE: (state, data) => {
    state.homePage = data
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
  // nuxtServerInit({ commit }, context) {
  //   return axios
  //     .get('https://mammae-clinic.ru/wp-json/wp/v2/posts', context)
  //     .then((articles) => {
  //       // console.log(articles);
  //       commit('SET_ARTICLES_TO_STATE', articles.data)
  //       this.loading = false
  //       return articles
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return error
  //     })
  // },
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
