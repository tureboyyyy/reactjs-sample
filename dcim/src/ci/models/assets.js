/**
 * Created by Administrator on 2017-06-07.
 */
import dva from 'dva';

export default {
  namespace: 'assets',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
