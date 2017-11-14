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
            name:'welcome',
            component:()=>import('./routes/welcome/index')
        },
        {
            path:'/login',
            name:'login',
            models:()=>[import('./models/login')],
            component:()=>import('./routes/login/login')
        },
        {
            path:'/dashboard',
            name:'Dashboard',
            models:()=>[import('./models/dashboard')],
            component:()=>import('./routes/dashboard/dashboard')
        },
        {
            path:'/user',
            name:'User',
            models:()=>[import('./models/users')],
            component:()=>import('./routes/user/user')
        },{
            path:'/news',
            name:'News',
            models:()=>[import('./models/news')],
            component:()=>import('./routes/news/news')
        },
        {
            path:'/note/add',
            name:'Notes',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/editor')
        },
        {
            path:'/edit/:id',
            name:'Notes',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/editor')
        },
        {
            path:'/notes',
            name:'Notes',
            models:()=>[import('./models/notes')],
            component:()=>import('./routes/notes/index')
        },
        {
            path:'/UIElement/editor',
            name:'UIElement',
            component:()=>import('./routes/UI/editor')
        },
        {
            path:'/UIElement/table',
            name:'UIElement',
            component:()=>import('./routes/UI/table')
        },
        {
            path:'/UIElement/form',
            name:'UIElement',
            component:()=>import('./routes/UI/form')
        },
        {
            path:'/multi-upload',
            name:'Upload',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/multi')
        },
        {
            path:'/my-files',
            name:'Files',
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
              {/*<PageHeader title={name}/>*/}
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
