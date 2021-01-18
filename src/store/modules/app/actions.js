import flatten from '@/helpers/flatten';
import { NAMES } from '@/const/mutationsName';
import { REQUEST_METHODS } from '@/const/requestMethods';
import { DEFAULT_HOST } from '@/const/defaultHost';
import Api from '@/api/Api';
import { ACTION_TYPES } from '@/const/actionTypes';

const API = new Api(DEFAULT_HOST);
const fetchData = (type) => (
  type === REQUEST_METHODS.GET
    ? API.GetData()
    : API.PostData()
);

export default {
  actions: {
    setDataFromApi: async ({ commit, state }, payload = null) => {
      commit(NAMES.SET_IS_SHOW_CHANGE_BLOCK, true);
      if (payload) {
        API.ChangeHost(state.host);
        commit(NAMES.SET_ERROR, null);
        commit(NAMES.SET_IS_LOADING, true);
      }
      const { data, error } = await fetchData(state.requestType);
      if (!data) {
        commit(NAMES.SET_ERROR, error ? error.message : 'Incorrect data structure.');
        commit(NAMES.SET_IS_LOADING, false);
        return;
      }
      try {
        const flattenData = flatten(data);
        commit(NAMES.SET_IS_LOADING, false);
        commit(NAMES.SET_DATA, flattenData);
        commit(NAMES.SET_DEFAULT_DATA, flattenData);
      } catch (error) {
        commit(NAMES.SET_ERROR, error.message);
        commit(NAMES.SET_IS_LOADING, false);
      }
      // обнулить поискб историю
      commit(NAMES.SET_DEFAULT);
    },
    setIsLoading: ({ commit }, isLoading) => {
      commit(NAMES.SET_IS_LOADING, isLoading);
    },
    setActionData: ({ commit, state }, payload) => {
      const { action } = payload;
      commit(NAMES.SET_CHANGE_SELECTED_ITEM, payload);
      if (action === ACTION_TYPES.ADD) {
        commit(NAMES.SET_CHANGE_DATA, payload);
      } else {
        commit(NAMES.SET_FILTER_DATA, state.searchString);
      }
      commit(NAMES.SET_HISTORY, payload);
    },
    setSearchString: ({ commit }, string) => {
      commit(NAMES.SET_SEARCH_STRING, string);
      commit(NAMES.SET_FILTER_DATA, string);
    },
    setError: ({ commit }, isError) => {
      commit(NAMES.SET_ERROR, isError);
    },
    setHost: ({ commit }, host) => {
      commit(NAMES.SET_HOST, host);
    },
    setRequestType: ({ commit }, type) => {
      commit(NAMES.SET_REQUEST_TYPE, type);
    },
    setIsShowChangeBlock: ({ commit }, data) => {
      commit(NAMES.SET_IS_SHOW_CHANGE_BLOCK, data);
    },
    setHistoryType: ({ commit }, type) => {
      commit(NAMES.SET_HISTORY_TYPE, type);
    },
  },
};
