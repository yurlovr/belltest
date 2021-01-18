import { REQUEST_METHODS } from '@/const/requestMethods';
import { HISTORY_TYPES } from '@/const/historyTypes';

export default {
  state: () => ({
    isLoading: true,
    data: [],
    defaultData: [],
    history: [],
    selectedData: [],
    searchString: '',
    error: null,
    host: '',
    requestType: REQUEST_METHODS.GET,
    showChangeBlock: true,
    historyType: HISTORY_TYPES.ALL,
  }),
};
