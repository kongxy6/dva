import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';

class VerticalHeader extends Component {
  menuClick = ({ item, key }) => {
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
    let key = '/playGround/';
    if (path.length > 1) {
      key += path[1];
    }
    if (key === '/playGround/') {
      key += 'status';
    }
    return (
      <Menu
        selectedKeys={[key]}
        mode="vertical-left"
        theme="blue"
        onClick={this.menuClick}
        style={{ width: 194 }}
      >
        <Menu.Item key="/playGround/start" style={{ margin: 0 }}>
          <Icon type="code" />
          Start
        </Menu.Item>
        <Menu.Item key="/playGround/status" style={{ margin: 0 }}>
          <Link to="/playGround/status">
            <Icon type="credit-card" />
            Status
          </Link>
        </Menu.Item>
        <Menu.Item key="/playGround/poweroff" style={{ margin: 0 }}>
          <Link to="/playGround/poweroff">
            <Icon type="poweroff" />
            Poweroff
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect()(VerticalHeader);
