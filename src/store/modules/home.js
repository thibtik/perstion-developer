import api from "@/api";

const state = {
  home: {},
};

const getters = {
  home: (state) => state.home,
};

const actions = {
  async fetchHome({ commit }, params) {
    await api.home.fetchHome(params).then((response) => {
      commit("setHome", response.data);
    });
  },
};

const mutations = {
  setHome: (state, home) => (state.home = home),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
