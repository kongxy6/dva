import React from 'react';
import { connect } from 'dva';
import styles from './Status.css';

function Status({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

Status.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.status
  };
}

export default connect(mapStateToProps)(Status);
