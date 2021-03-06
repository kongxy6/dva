import React from 'react';
import { Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from '../routes/App';

const { ConnectedRouter } = routerRedux;

// import IndexPage from './routes/IndexPage'
// import User from './routes/User'

//console.log(dvaRouter);

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('../routes/IndexPage/IndexPage')
  });
  const User = dynamic({
    app,
    models: () => [import('../models/user')],
    component: () => import('../routes/User/User')
  });

  const PlayGround = dynamic({
    app,
    models: () => [
      import('../models/playGround'),
      import('../models/startService'),
      import('../models/powerOff'),
      import('../models/status')
    ],
    component: () => import('../routes/PlayGround/PlayGround')
  });

  return (
    <ConnectedRouter history={history}>
      {/* <Provider store={store}> */}
      <App>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user" component={User} />
        {/* 匹配以之开头的所有路由 */}
        <Route path="/playGround" component={PlayGround} />
      </App>
      {/* </Provider> */}
    </ConnectedRouter>
  );
}

export default RouterConfig;
