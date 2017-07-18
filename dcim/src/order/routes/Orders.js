/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import { connect } from 'dva';
import { Breadcrumb, Button } from 'antd';
import { browserHistory } from 'react-router';
import OrderList from '../components/OrderList';
import style from '../../common/components/dcim.css';

const Orders = ({ dispatch, list }) => {
  function handleDelete(id) {
    dispatch({
      type: 'orders/delete',
      payload: id,
    });
  }
  function handleCreat() {
    browserHistory.push('/creatOrder');
  }
  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>运维</Breadcrumb.Item>
        <Breadcrumb.Item>工单管理</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <div className={style.content_title}>
          工单列表
        </div>
        <div className={style.btn_top_right}>
          <Button type="primary" onClick={handleCreat}>创建工单 </Button>
        </div>
      </div>
      <OrderList onDelete={handleDelete} list={list} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    list: state.orders.list,
  };
}

// export default Products;
export default connect(mapStateToProps)(Orders);
