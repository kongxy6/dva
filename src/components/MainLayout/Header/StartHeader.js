import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

class StartHeader extends Component {
  menuClick = ({ item, key }) => {
    //使用<Link to="/">标签也是可以的
    this.props.dispatch(
      routerRedux.push({
        pathname: key,
        search: null
      })
    );
  };

  render() {
    const { location } = this.props;
    const path = location.pathname.substr(1).split('/');
    let key = '/playGround/start/';
    if (path.length > 2) {
      key += path[2];
    }
    if (key === '/playGround/start/') {
      key += 'one';
    }
    return (
      <Menu
        selectedKeys={[key]}
        mode="horizontal"
        theme="blue"
        onClick={this.menuClick}
      >
        <Menu.Item key="/playGround/start/one">
          <Icon type="user" />
          One
        </Menu.Item>
        <Menu.Item key="/playGround/start/two">
          <Icon type="desktop" />
          Two
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect()(StartHeader);
