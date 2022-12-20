import axios from 'axios'

export const state = () => ({
  articles: [],
})

export const mutations = {
  SET_ARTICLES_TO_STATE: (state, data) => {
    state.articles = data
  },
}

export const actions = {
  GET_ARTICLES_FROM_API({ commit }) {
    return axios
      .get('https://mammae-clinic.ru/wp-json/wp/v2/posts')
      .then((articles) => {
        commit('SET_ARTICLES_TO_STATE', articles.data)
        return articles
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
}

export const getters = {
  ARTICLES: (state) => state.articles,
}
