import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Redirect,routerRedux } from 'dva/router';

import dynamic from 'dva/dynamic';

const {ConnectedRouter}=routerRedux
function RouterConfig({ history ,app}) {

    const error = dynamic({
        app,
        component: () => import('./routes/error'),
    })
    const routes=[
        {
            path:'/',
            component:()=>import('./routes/welcome/index')
        },
        {
            path:'/login',
            models:()=>[import('./models/login')],
            component:()=>import('./routes/login/login')
        },
        {
            path:'/dashboard',
            models:()=>[import('./models/dashboard')],
            component:()=>import('./routes/material/dashboard')
        },
        {
            path:'/user',
            models:()=>[import('./models/users')],
            component:()=>import('./routes/material/user')
        },{
            path:'/news',
            models:()=>[import('./models/news')],
            component:()=>import('./routes/material/news')
        },
        {
            path:'/test',
            component:()=>import('./routes/material/test')
        },
        {
            path:'/editor',
            component:()=>import('./routes/material/editor')
        }
    ]
  return (
    <ConnectedRouter history={history}>
      <Switch>
          {
              routes.map(({ path, ...dynamics }, key) => (
                  <Route key={key}
                         exact
                         path={path}
                         component={dynamic({
                             app,
                             ...dynamics,
                         })}
                  />
              ))
          }
      </Switch>
    </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}
export default RouterConfig;
