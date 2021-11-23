import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "",
    resultList: [],
    pagination: {
      first: undefined,
      last: undefined,
      prev: undefined,
      next: undefined,
      total: 0,
      page: 0,
    },
    currentResultStart: undefined,
    loading: false,
    meta: "",
    error: "",
  },
  mutations: {
    SET_URL(state, { val }) {
      state.url = val;
    },
    SET_RESULT_LIST(state, { resultList }) {
      state.resultList = resultList;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
    },
    SET_META(state, meta) {
      state.meta = meta.meta;
    },
    RESET_PAGINATION(state) {
      state.pagination = {
        first: undefined,
        last: undefined,
        prev: undefined,
        next: undefined,
        total: 0,
        page: 0,
      };
    },
    SET_CURRENT_RESULT_START(state, { currentResultStart }) {
      state.currentResultStart = currentResultStart;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error.error;
    },
  },
});
