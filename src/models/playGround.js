export default {
  namespace: 'playGround',
  state: {
    modelCode: 'playGround-model'
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    get(state) {
      return { ...state };
    }
  },
  effects: {},
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ search, pathname }) => {});
    }
  }
};
