import { NAMES } from '@/const/mutationsName';
import getDate from '@/helpers/getDate';
import { ACTION_TYPES } from '@/const/actionTypes';

export default {
  mutations: {
    [NAMES.SET_DATA]: (state, data) => {
      state.data = data.map((item, index) => ({
        ...item,
        index,
      }));
    },
    [NAMES.SET_DEFAULT_DATA]: (state, data) => { state.defaultData = data; },
    [NAMES.SET_IS_LOADING]: (state, isLoading) => { state.isLoading = isLoading; },
    [NAMES.SET_ADD_SELECTED_ITEM]: (state, data) => {
      state.selectedData = state.selectedData.concat(data);
    },
    [NAMES.SET_HISTORY]: (state, payload) => {
      const date = getDate();
      const { action, item } = payload;
      const { id, name } = item;
      state.history = state.history.concat({
        action,
        id,
        name,
        date,
      });
    },
    [NAMES.SET_CHANGE_SELECTED_ITEM]: (state, payload) => {
      const { action, item } = payload;
      if (action === ACTION_TYPES.ADD) {
        state.selectedData = state.selectedData.concat(item);
      }
      if (action === ACTION_TYPES.DEL) {
        state.selectedData = state.selectedData.filter((d) => d.id !== item.id);
      }
    },
    [NAMES.SET_CHANGE_DATA]: (state, { item }) => {
      state.data = state.data.filter((d) => d.id !== item.id);
    },
    [NAMES.SET_SEARCH_STRING]: (state, string) => state.searchString = string,
    [NAMES.SET_FILTER_DATA]: (state, string) => {
      const search = new RegExp(string, 'g');
      state.data = state.defaultData
        .filter((item) => !state.selectedData.find((d) => d.id === item.id))
        .map((item) => ({
          ...item,
          countEqually: (item.name.match(search) || []).length,
        }))
        .filter((item) => item.countEqually)
        .sort((a, b) => b.countEqually - a.countEqually);
    },
    [NAMES.SET_ERROR]: (state, isError) => {
      state.error = isError;
    },
    [NAMES.SET_HOST]: (state, host) => {
      state.host = host;
    },
    [NAMES.SET_REQUEST_TYPE]: (state, type) => {
      state.requestType = type;
    },
    [NAMES.SET_IS_SHOW_CHANGE_BLOCK]: (state, data) => {
      state.showChangeBlock = data;
    },
    [NAMES.SET_HISTORY_TYPE]: (state, type) => {
      state.historyType = type;
    },
    [NAMES.SET_DEFAULT]: (state) => {
      state.searchString = '';
      state.history = [];
      state.selectedData = [];
    },
  },
};
