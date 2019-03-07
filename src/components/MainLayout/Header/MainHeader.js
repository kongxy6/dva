import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

class MainHeader extends Component {
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
    let key = '/';
    if (path) {
      key += path[0];
    }
    return (
      <Menu
        selectedKeys={[key]}
        mode="horizontal"
        theme="blue"
        onClick={this.menuClick}
      >
        <Menu.Item key="/">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="/user">
          <Icon type="user" />
          User
        </Menu.Item>
        <Menu.Item key="/playGround">
          <Icon type="desktop" />
          playGround
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect()(MainHeader);
