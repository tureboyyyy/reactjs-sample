/**
 * Created by Administrator on 2017-06-07.
 */
import * as orderService from '../services/orderService';

export default {
  namespace: 'orders',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data, total, page } }) {
      return { ...state, list: data, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(orderService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *create({ payload: values }, { call,put }) {
      yield call(orderService.create, values);
      yield put({ type: 'fetch', payload: { page: 1 } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log('subscriptions', pathname);
        if (pathname === 'orders') {
          console.log('dispatch fetch ', pathname);
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
