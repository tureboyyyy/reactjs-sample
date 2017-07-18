/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import AssetsList from '../components/AssetsList';

const Assets = ({ dispatch, assets }) => {
  function handleDelete(id) {
    dispatch({
      type: 'assets/delete',
      payload: id,
    });
  }
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>运维</Breadcrumb.Item>
        <Breadcrumb.Item>资产管理</Breadcrumb.Item>
      </Breadcrumb>
      <h2>资产列表</h2>
      <AssetsList onDelete={handleDelete} assets={assets} />
    </div>
  );
};

// export default Products;
export default connect(({ assets }) => ({
  assets,
}))(Assets);

