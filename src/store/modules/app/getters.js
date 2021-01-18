export default {
  getters: {
    getData: (state) => state.data,
    getDefaultData: (state) => state.defaultData,
    getIsLoading: (state) => state.isLoading,
    getSelectedData: (state) => state.selectedData,
    getHistory: (state) => state.history,
    getSearchString: (state) => state.searchString,
    getError: (state) => state.error,
    getHost: (state) => state.host,
    getIsShowChangeBlock: (state) => state.showChangeBlock,
    getHistoryType: (state) => state.historyType,
  },
};
