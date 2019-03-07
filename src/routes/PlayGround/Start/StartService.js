import React from 'react';
import { connect } from 'dva';
import styles from './StartService.css';

function StartService({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

StartService.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.startService
  };
}

export default connect(mapStateToProps)(StartService);
