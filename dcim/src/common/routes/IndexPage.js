/**
 * Created by Administrator on 2017-06-07.
 */
import { Layout } from 'antd';
import { connect } from 'dva';
import React, { Component } from 'react';
import styles from './IndexPage.css';
import TopMenu from '../components/TopMenu';

const { Header, Content, Footer } = Layout;
class IndexPage extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className={styles.logo}>运维管理系统</div>
          <TopMenu />
        </Header>
        <Content style={{ padding: '0 50px' }} >
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }} >
          运维管理系统 Design by Chenhui.
        </Footer>
      </Layout>
    );
  }
}

export default connect()(IndexPage);
