import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';

class VerticalHeader extends Component {
  // constructor(props) {
  //     super(props)
  // }
  menuClick = ({ item, key }) => {
    /*this.props.dispatch(
      routerRedux.push({
        pathname: key,
        search: null,
      })
    );*/
  };

  render() {
    const { location } = this.props;
    return (
      <Menu
        selectedKeys={[location.pathname]}
        mode="vertical-left"
        theme="blue"
        onClick={this.menuClick}
        style={{ width: 194 }}
      >
        <Menu.Item key="/playGround/code" style={{ margin: 0 }}>
          <Link to="/playGround/code">
            <Icon type="code" />
            Code
          </Link>
        </Menu.Item>
        <Menu.Item key="/playGround/creditCard" style={{ margin: 0 }}>
          <Link to="/playGround/creditCard">
            <Icon type="credit-card" />
            Credit-Card
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
