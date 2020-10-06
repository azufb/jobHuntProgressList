import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: [
      {
        name: '株式会社Freewill',
        area: '東京都',
        progress: '内定',
        url: 'https://www.free-will.co/'
      }
    ]
  },
  getters: {
    getCompanies() {
      return this.$store.state.getCompanies;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
