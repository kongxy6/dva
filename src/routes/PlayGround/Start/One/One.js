import React from 'react';
import { connect } from 'dva';
import styles from './One.css';

function One({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

One.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.startService
  };
}

export default connect(mapStateToProps)(One);
