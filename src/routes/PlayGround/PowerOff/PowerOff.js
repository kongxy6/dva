import React from 'react';
import { connect } from 'dva';
import styles from './PowerOff.css';

function PowerOff({ modelCode, dispatch }) {
  return <div className={styles.normal}>{modelCode}</div>;
}

PowerOff.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.powerOff
  };
}

export default connect(mapStateToProps)(PowerOff);
