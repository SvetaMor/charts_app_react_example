import {ReactType} from 'react';
import {IClassNameProps} from '@bem-react/core';

export interface IChartProps extends IClassNameProps
{
   chart: {
      labels: [];
      dataIncome: [];
      dataExpense:[];
   },
   className: string;
   as?: ReactType;
}
