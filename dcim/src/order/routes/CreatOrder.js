/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'dva';
import { browserHistory } from 'react-router';

import CreateOrderComp from '../components/CreatOrderComp';
import style from '../../common/components/dcim.css';


const CreatOrder = ({ dispatch }) => {
  function createHandler(values) {
    dispatch({
      type: 'orders/create',
      payload: { ...values },
    });
    browserHistory.push('/orders');
  }
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>运维</Breadcrumb.Item>
        <Breadcrumb.Item>工单管理</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <div className={style.content_title}>
          创建工单
        </div>
        <CreateOrderComp onOk={createHandler} />
      </div>
    </div>
  );
};

// export default Products;
export default connect()(CreatOrder);
