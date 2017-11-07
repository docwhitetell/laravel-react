import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Redirect,routerRedux } from 'dva/router';
import Layout from './routes/app'
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
            component:()=>import('./routes/dashboard/dashboard')
        },
        {
            path:'/user',
            models:()=>[import('./models/users')],
            component:()=>import('./routes/user/user')
        },{
            path:'/news',
            models:()=>[import('./models/news')],
            component:()=>import('./routes/news/news')
        },
        {
            path:'/note/add',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/editor')
        },
        {
            path:'/edit/:id',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/editor')
        },
        {
            path:'/notes',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/index')
        },
        {
            path:'/UIElement/editor',
            component:()=>import('./routes/UI/editor')
        },
        {
            path:'/multi-upload',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/multi')
        },
        {
            path:'/my-files',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/myFiles')
        }
    ]
  return (
      <ConnectedRouter history={history}>
          <Layout>
              <Switch>
                  {
                      routes.map(({path, ...dynamics}, key) => (
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
          </Layout>
      </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}
export default RouterConfig;
