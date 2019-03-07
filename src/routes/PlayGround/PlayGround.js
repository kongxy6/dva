import React, { Component } from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import styles from './PlayGround.less';
import VerticalHeader from '../../components/MainLayout/Header/VerticalHeader.js';
import Code from './Code/Code';

class PlayGround extends Component {
  render() {
    const { location, match } = this.props;
    return (
      <div className={styles.normal}>
        <VerticalHeader location={location} />
        <div className={styles.content}>
          <div className={styles.main}>
            <Switch>
              <Route path={`${match.path}/code`} exact component={Code} />
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
