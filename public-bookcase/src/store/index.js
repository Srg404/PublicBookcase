import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null, // List with all publicBoxCase
    statusList: 'waiting', // authorize values : 'waiting', 'done', 'error'
  },
  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setStatusList(state, data) {
      state.statusList = data;
    },
  },
  getters: {
    getList: (state) => state.list,
    getStatusList: (state) => state.statusList,
  },
  actions: {
  },
  modules: {
  },
});
