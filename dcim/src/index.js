import dva from 'dva';
import { browserHistory } from 'dva/router';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    assets: [
       { name: '机架服务器-1', id: 1 },
       { name: '存储-1', id: 2 },
       { name: '交换机-1', id: 3 },
    ],
    orders: {
      list: [
        { title: '服务器故障单', id: 1, type: 'Hareware Fault', creator: 'Jim' },
        { title: '存储故障单', id: 2, type: 'Hareware Fault', creator: 'Jim' },
        { title: '交换机故障单', id: 3, type: 'Hareware Fault', creator: 'Jim' },
      ],
      total: null,
      page: null,
    },
  },
  history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./ci/models/assets'));
app.model(require('./order/models/orders'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
