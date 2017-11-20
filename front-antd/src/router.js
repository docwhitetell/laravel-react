import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect,routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Layout from './routes/app'
import PageHeader from './components/pageHeader/pageHeader'
const {ConnectedRouter}=routerRedux
function RouterConfig({ history ,app}) {

    const error = dynamic({
        app,
        component: () => import('./routes/error'),
    })


    const routes=[
        {
            path:'/',
            models:()=>[import('./models/index')],
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
            path:'/blogs',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/index')
        },
        {
            path:'/blogs/create',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/editor')
        },
        {
            path:'/blogs/edit/:id',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/editor')
        },
        {
            path:'/UIElement/editor',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/editor')
        },
        {
            path:'/UIElement/table',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/table')
        },
        {
            path:'/UIElement/form',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/form')
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
        },
        {
            path:'/files-lists',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/lists')
        }
    ]
  return (
      <ConnectedRouter history={history}>
          <Layout>
              <Switch>
                  {
                      routes.map(({path,name, ...dynamics}, key) => (
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
