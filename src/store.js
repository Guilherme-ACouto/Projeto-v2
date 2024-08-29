import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedOption: null,
    searchResult: null // Estado para armazenar os resultados da pesquisa
  },
  mutations: {
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setSearchResult(state, result) {
      state.searchResult = result;
    }
  },
  actions: {
    updateSelectedOption({ commit }, option) {
      commit('setSelectedOption', option);
    },
    performSearch({ commit, state }) {
      const result = state.selectedOption ? state.selectedOption : null;
      commit('setSearchResult', result);
    },
    clearSearch({ commit }) {
      commit('setSelectedOption', null);
      commit('setSearchResult', null);
    }
  }
});
