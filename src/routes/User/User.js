import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './User.less';

import UsersComponent from '../../components/UsersTable/UsersTable';

class User extends Component {
  render() {
    return (
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    );
  }
}

User.propTypes = {};

export default connect()(User);
