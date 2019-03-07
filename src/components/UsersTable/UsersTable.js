import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './UsersTable.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
];

class UsersTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    this.props.dispatch({
      type: 'user/fetch',
      payload: {
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      }
    });
  };

  componentDidMount() {
    //首次加载手动设置参数
    this.props.dispatch({
      type: 'user/fetch',
      payload: {
        page: 1
      }
    });
  }

  getExpandedRow(record) {
    return <p style={{ margin: 0 }}>{record.phone}</p>;
  }

  render() {
    const { tableName } = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.table}>
          {tableName}
          <br />
          <br />
          <Table
            columns={columns}
            dataSource={this.props.data}
            loading={this.props.loading}
            rowKey={record => record.login.uuid}
            pagination={this.props.pagination}
            onChange={this.handleTableChange}
            size={'middle'}
            expandedRowRender={record => this.getExpandedRow(record)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // 得到modal中的state将其赋值给该组件的属性
  return {
    ...state.user
  };
}

export default connect(mapStateToProps)(UsersTable);
