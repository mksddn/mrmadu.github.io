// import axios from 'axios'

export const state = () => ({
  loading: true,
  articles: null,
  lastArticles: null,
  currArticle: null,
})

export const mutations = {
  // SET_LOADING_TO_FALSE: (state)
  SET_ARTICLES_TO_STATE: (state, data) => {
    state.articles = data
  },
  SET_CURR_ARTICLE: (state, data) => {
    state.currArticle = data
  },
  SET_LAST_ARTICLES: (state, data) => {
    state.lastArticles = data
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
  // GET_ARTICLE_FROM_API({ commit }) {
  //   return axios
  //     .get('https://mammae-clinic.ru/wp-json/wp/v2/posts')
  //     .then((article) => {
  //       commit('SET_ARTICLES_TO_STATE', article.data)
  //       return article
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       return error
  //     })
  // },
}

export const getters = {
  // ARTICLES: (state) => state.articles,
}
