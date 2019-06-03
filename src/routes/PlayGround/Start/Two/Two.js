import React from 'react';
import { connect } from 'dva';
import styles from './Two.css';

function Two({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

Two.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.startService
  };
}

export default connect(mapStateToProps)(Two);
