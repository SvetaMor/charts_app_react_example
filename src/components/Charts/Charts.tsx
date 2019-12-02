import React, {FC} from 'react';
import {Line} from 'react-chartjs-2';
import {IChartProps} from './index';

const Chart: FC<IChartProps> = (
{
   chart,
   className,
   as: Component = 'div',
   ...props
}) =>
{
   const state = {
      chartData:{
         labels: chart.labels,
         datasets:[
            {
               label:'Imcome',
               fill: false,
               data: chart.dataIncome,
               borderColor:['rgb(54,162,235,0.6)']
            },
            {
               label:'Expense',
               fill: false,
               data: chart.dataExpense,
               borderColor:['rgb(255,99,132,0.6)']
            }
         ]
      }
   }

    const defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
//using the library 'react-chartjs-2' build chats with type Line
   return (
      <Component className={className}>
          <Line
            data={state.chartData}
            width={300}
            height={250}
            options={{
               maintainAspectRatio: false,
               title:
               {
                  display: defaultProps.displayTitle,
                  text: 'Cash flow statement',
                  fontSize: 25
               },
               legend:
               {
                  display: defaultProps.displayLegend,
                  position: defaultProps.legendPosition
               }
            }}
         />
      </Component>
   );
}

export default Chart;
