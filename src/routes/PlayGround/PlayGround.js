import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import styles from './PlayGround.less';
import VerticalHeader from '../../components/MainLayout/Header/VerticalHeader.js';
import dynamic from 'dva/dynamic';

const StartService = dynamic({
  component: () => import('./Start/StartService')
});

const PowerOff = dynamic({
  component: () => import('./PowerOff/PowerOff')
});

const Status = dynamic({
  component: () => import('./Status/Status')
});

class PlayGround extends Component {
  render() {
    const { location, match } = this.props;
    return (
      <div className={styles.normal}>
        <VerticalHeader location={location} />
        <div className={styles.content}>
          <div className={styles.main}>
            <Switch>
              <Route path={`${match.path}/`} exact component={Status} />
              <Route path={`${match.path}/start`} component={StartService} />
              <Route path={`${match.path}/status`} component={Status} />
              <Route path={`${match.path}/poweroff`} component={PowerOff} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playGround: state.playGround
  };
}

export default connect(mapStateToProps)(PlayGround);
