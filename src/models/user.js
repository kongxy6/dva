import { fetch } from '../services/users.js';

export default {
  namespace: 'user',
  state: {
    tableName: 'UserTable',
    modelCode: 'user-model',
    data: [],
    pagination: { pageSize: 10 },
    loading: false,
    subService: [],
    isShowSubServiceModal: false,
    subServiceCol: {},
    subServiceName: null
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    get(state) {
      return { ...state };
    }
  },
  effects: {
    *fetch({ payload }, { call, put, select }) {
      yield put({
        type: 'save',
        payload: {
          loading: true
        }
      });
      const { page } = payload;
      const { pagination } = yield select(_ => _.user);
      // Read total count from server
      // pagination.total = data.totalCount;
      const { results } = yield call(fetch, {
        ...payload,
        results: pagination.pageSize
      });
      yield put({
        type: 'save',
        payload: {
          loading: false,
          data: results,
          pagination: {
            total: 100,
            current: page,
            pageSize: pagination.pageSize
          }
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      //其实是操作的history的location参数
      return history.listen(({ search, pathname }) => {
        if (pathname === '/users') {
          // 可以使用如下方法去解析URL中的参数
          // const { page } = qs.parse(search.substring(1));
          // dispatch({ type: 'fetch', payload: { page: page} })
        }
      });
    }
  }
};
