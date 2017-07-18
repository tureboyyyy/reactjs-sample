/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm } from 'antd';

const OrdersList = ({ onDelete, list }) => {
  const columns = [{
    title: '流水号',
    dataIndex: 'id',
  },
  {
    title: '工单标题',
    dataIndex: 'title',
  },
  {
    title: '故障类型',
    dataIndex: 'type',
  },
  {
    title: '操作',
    render: (text, record) => {
      return (
        <div>
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <a>编辑</a>&nbsp;&nbsp;
          </Popconfirm>
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </div>
      );
    },
  }];

  return (
    <Table
      dataSource={list}
      columns={columns}
    />
  );
};

OrdersList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default OrdersList;
