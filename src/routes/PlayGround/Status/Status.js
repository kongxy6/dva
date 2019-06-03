import React from 'react';
import { connect } from 'dva';
import styles from './Status.css';
import ShangHaiMap from '../../../components/ECharts/Map/ShanghaiMap.js';
import MotoGauge from '../../../components/ECharts/Gauge/MotoGauge';
import Graph from '../../../components/ECharts/Graph/Graph';

function Status({ modelCode, dispatch }) {
  return (
    <div className={styles.normal}>
      <ShangHaiMap />
      <MotoGauge />
      <Graph />
    </div>
  );
}

Status.propTypes = {};

function mapStateToProps(state) {
  return {
    ...state.status
  };
}

export default connect(mapStateToProps)(Status);
