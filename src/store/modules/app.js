import state from './app/state';
import actions from './app/actions';
import mutations from './app/mutations';
import getters from './app/getters';

export default {
  namespaced: true,
  ...state,
  ...actions,
  ...mutations,
  ...getters,
};
