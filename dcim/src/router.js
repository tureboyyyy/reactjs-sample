import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './common/routes/IndexPage';
import Orders from './order/routes/Orders';
import Assets from './ci/routes/Assets';
import CreatOrder from './order/routes/CreatOrder';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <IndexRoute component={Assets} />
        <Route path="assets" component={Assets} />
        <Route path="orders" component={Orders} />
        <Route path="creatOrder" component={CreatOrder} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
