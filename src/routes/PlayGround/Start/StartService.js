import React from 'react';
import { connect } from 'dva';
import styles from './StartService.css';
import { Route, Switch } from 'react-router';
import StartHeader from '../../../components/MainLayout/Header/StartHeader';
import dynamic from 'dva/dynamic';

const StartOne = dynamic({
  component: () => import('./One/One')
});

const StartTwo = dynamic({
  component: () => import('./Two/Two')
});

// 函数式组件连接状态后，直接传参即可
function StartService({ modelCode, dispatch, location, match }) {
  return (
    <div className={styles.normal}>
      <StartHeader location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          <Switch>
            <Route path={`${match.path}`} exact component={StartOne} />
            <Route path={`${match.path}/one`} component={StartOne} />
            <Route path={`${match.path}/two`} component={StartTwo} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

StartService.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.startService
  };
}

export default connect(mapStateToProps)(StartService);
