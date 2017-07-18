import React from 'react';
import { connect } from 'dva';
import styles from '../Users.css';
import Login1Component from '../../components/example/Login1';
import Login2Component from '../../components/example/Login2';
import MainLayout from '../../components/MainLayout/MainLayout';

function Login1({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Login1Component />
      </div>
    </MainLayout>
  );
}

export default connect()(Login1);
