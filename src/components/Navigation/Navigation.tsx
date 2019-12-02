import React, {Component} from 'react';
import './Navigation.css';
import {Link, withRouter} from "react-router-dom";
import {NonAuthRoutes, IRoute} from '../../routes/authRoute';
import {cnPage} from '../Page/Page';

export interface IProps
{
  history?: any;
  className: string;
}

export interface IState
{
  activeLink: number;
}

export  const Navigation = () => (
   <NavigationNonAuth />
);

export class NavigationNonAuthC extends Component<IProps, IState>
{
   constructor(props: IProps, state: IState) {
      super(props, state);
      this.state = {
         activeLink: 0
      }
   }

//set the active link to state
   handleClick(id: number): void {
      this.setState({ activeLink: id });
   }

//we get menu items from the array "NonAuthRoutes" and render the navigation menu
   render() {
      return(
         <ul className={cnPage('Navigation')}>
            {NonAuthRoutes.map((route: IRoute) => {
               const classNameLink = (route.id === this.state.activeLink)
                           ? "active_item" : "";
               return (
                  <li className={cnPage('Navigation', {li: 'Link'})}
                      key={route.id}
                      onClick={() => this.handleClick(route.id)}>
                     <Link to={route.path}
                           className={cnPage('Navigation',{a:classNameLink})}>
                        {route.description}
                     </Link>
                  </li>
               )
            })}
         </ul>
    );
  }
}

export const NavigationNonAuth = withRouter(NavigationNonAuthC as any);
