import Vue from 'vue';
import Vuex from 'vuex';
import registration from './modules/registration';

Vue.use(Vuex);

export default function () {
  const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      registration,
    },
  });
  return store;
}