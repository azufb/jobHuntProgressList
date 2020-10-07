import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: []
  },
  getters: {
    companies(state) {
      return state.companies;
    }
  },
  mutations: {
    addCompanies(state, payload) {
      state.companies.push(payload.company);
    },
    deleteCompanies(state) {
      let indexed = state.companies.findIndex(company => company.name === name);
      state.companies.splice(indexed, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
