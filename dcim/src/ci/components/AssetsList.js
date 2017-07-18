/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const AssetsList = ({ onDelete, assets }) => {
  const columns = [{
    title: '资产名称',
    dataIndex: 'name',
  }, {
    title: '资产ID',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={assets}
      columns={columns}
    />
  );
};

AssetsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  assets: PropTypes.array.isRequired,
};

export default AssetsList;
