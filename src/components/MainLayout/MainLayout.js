import React, { Component } from 'react';
import styles from './MainLayout.css';
import Header from './Header/MainHeader';

class MainLayout extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div className={styles.normal}>
        <Header location={location} />
        <div className={styles.content}>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
