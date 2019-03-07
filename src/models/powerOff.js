export default {
  namespace: 'powerOff',
  state: {
    modelCode: 'powerOff-model'
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
