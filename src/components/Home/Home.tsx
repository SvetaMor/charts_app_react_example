import * as React from 'react';
import {Component} from 'react';
import history from '../../constants/history';
import './Home.css';
import {TypesChart, ITypeChart} from '../Charts/TypesChart';
import {Button} from '../Button/Button';
import {cnPage} from '../Page/Page';
import {APICharts} from '../../constants/jsonServer';

export interface IHomeProps {
    error: any;
    isLoaded: false;
}

class Home extends Component
{
   constructor(props: IHomeProps) {
      super(props);
      this.state = {
         error: '',
         isLoaded: false
      };
   }

   componentDidMount() {
      //json-server request and set to state error or response data
      fetch(APICharts)
         .then(res => res.json())
            .then(
               (result) => {
                  this.setState({
                     isLoaded: true
                  });
               },
               (error) => {
                  this.setState({
                     isLoaded: true,
                     error: "<< need to start json-server (port 4000) >>"
                  });
               }
            )
   }

   public render() {
      const localState: any = this.state;
         if (localState.error) {
         // display an error, when receiving an error from the server
            return <div>ERROR: {localState.error}</div>;
         } else if (!localState.isLoaded) {
         // display Loading, while data is received
            return <div>Loading...</div>;
         } else {
            // return buttons with links to the desired charts
            return (
               <div className="">
                  {TypesChart.map((item: ITypeChart) => (
                     <Button className={cnPage({btn: 'Chart'})}
                             key={item.id}
                             onClick={()=> this.handleClick(item.type)}
                             value={item.description}/>
                  ))}
               </div>
            );
         }
   }

//save in BrowserHistory and follow the link with the desired charts
//render component DetailedChart
   handleClick(typeChart: string)  {
      history.push("/chart/" + typeChart);
   }
}

export default Home;
