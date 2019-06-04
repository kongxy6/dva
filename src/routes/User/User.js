import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './User.less';

import UsersComponent from '../../components/UsersTable/UsersTable';

class User extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <UsersComponent location={this.props.location} />
      </div>
    );
  }
}

User.propTypes = {};

function mapStateToProps(state, ownProps) {
  // 得到modal中的state将其赋值给该组件的属性
  return {
    ...ownProps,
    ...state.user
  };
}

export default connect(mapStateToProps)(User);
