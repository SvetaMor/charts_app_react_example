import React, {FC} from 'react';
import './Page.css';
import {Route, Switch, Router} from "react-router-dom";
import {Navigation} from '../Navigation/Navigation';
import history from '../../constants/history';
import {AppRoutes, IAppRoute} from '../../routes/appRoutes';
import {cn} from '@bem-react/classname';

export const cnPage = cn('Page');

const Page: FC = () => (
   <Router history={history}>
      <div className={cnPage()}>
         <Navigation />
         <hr />
         <Switch>
         {
            AppRoutes.map((route: IAppRoute) => (
               <Route exact={route.exact}
                     path={route.path}
                     component={route.component}
                     key={route.path} />))
         }
         </Switch>
      </div>
   </Router>
);

export default Page;
