import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
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
    models: () => [import('../models/playGround'), import('../models/code')],
    component: () => import('../routes/PlayGround/PlayGround')
  });

  return (
    <ConnectedRouter history={history}>
      {/* <Provider store={store}> */}
      <App>
        <Switch>
          {/* <Route exact path="/" render={() => <Redirect to="/" />}> */}
          <Route path="/" exact component={IndexPage} />
          <Route path="/user" exact component={User} />
          <Route path="/playGround" component={PlayGround} />
          <Route path="*" render={() => <Redirect to="/" />} />
          {/* </Route> */}
        </Switch>
      </App>
      {/* </Provider> */}
    </ConnectedRouter>
  );
}

export default RouterConfig;
