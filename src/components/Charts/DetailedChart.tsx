import React, {Component} from "react";
import {IChart} from "../../entities/Chart";
import Charts from './Charts';
import history from '../../constants/history';
import {cnPage} from '../Page/Page';
import {APICharts} from '../../constants/jsonServer';

export interface IProps
{
   item: IChart;
}

export interface IState
{
   isLoaded: boolean;
   currentChart: IChart;
   error?: string;
}

export default class DetailedChart extends Component<IProps, IState>
{
   constructor(props: IProps, state: IState) {
      super(props, state);
      this.state = {
         error: '',
         isLoaded: false,
         currentChart: {
            id: '',
            type: '',
            title: '',
            labels: [],
            dataIncome: [],
            dataExpense: []
         }
      }
   }

   componentDidMount() {
      this.getChartByType(history.location.pathname.split('/')[2]);
   }

   getChartByType(type: string) {
      //json-server request and set to state error or response data
      fetch(APICharts)
         .then(res => res.json())
            .then(
               (result) => {
                  const currentChart = result.find((item: IChart) =>
                     item.type.toString() === type);
                  this.setState({
                     isLoaded: true,
                     currentChart
                  });
               },
               (error) => {
                  this.setState({
                     isLoaded: true,
                     error
                  });
               }
            )
   }

   public render()
   {
      const localState: any = this.state;

      if (localState.error) {
         return <div>Error: {localState.error!.message}</div>;
      } else if (!localState.isLoaded) {
         return <div>Loading...</div>;
      } else {
         const currentChart: IChart = this.state.currentChart;
         if(currentChart){
            return (
               <div className={cnPage('Chart')}>
                  <Charts chart={currentChart}
                     className={cnPage('Chart',{type:currentChart.type})} />
                  <p className={cnPage({chart:'discription'})}>
                     {currentChart.title}
                  </p>
               </div>
            );
         } else {
            return (
               <div className={cnPage('NoContent')}>
                  No content
               </div>
            );
         }
      }
   }
}
