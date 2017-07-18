/**
 * Created by Administrator on 2017-06-07.
 */
import React from 'react';
import { Menu } from 'antd';
import { Link, browserHistory } from 'react-router';

class TopMenu extends React.Component {
  state = {
    current: 'assets',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    browserHistory.push(e.key);
  }

  render() {
    return (
      <div>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          mode="horizontal"
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="assets">资产管理</Menu.Item>
          <Menu.Item key="orders">工单管理</Menu.Item>
          <Menu.Item key="alarms">告警管理</Menu.Item>
        </Menu>
      </div>
    );
  }
}

TopMenu.propTypes = {
};

export default TopMenu;
