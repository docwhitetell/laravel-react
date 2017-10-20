import dva from 'dva';
import { message } from 'antd'
import './index.css';
import { browserHistory } from 'dva/router'
import createHistory from 'history/createBrowserHistory'
// 1. Initialize
const app = dva({
    history: createHistory(),
    onError (error) {
        message.error(error.message)
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/app'))
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');