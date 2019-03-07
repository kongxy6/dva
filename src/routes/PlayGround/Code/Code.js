import React from 'react';
import { connect } from 'dva';
import styles from './Code.css';

function Code({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

Code.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.code
  };
}

export default connect(mapStateToProps)(Code);
