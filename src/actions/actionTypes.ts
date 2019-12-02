import {DAY_OPTION, MONTH_OPTION, YEAR_OPTION} from './chartAction';
import {IChart} from '../entities/Chart';

export const dayDisplay = (chart: IChart) =>
{
   return {
      type: DAY_OPTION,
      chart
   }
};

export const monthDisplay = (chart: IChart) =>
{
   return {
      type: MONTH_OPTION,
      chart
   }
};

export const yearDisplay = (chart: IChart) =>
{
   return {
      type: YEAR_OPTION,
      chart
   }
};

export interface IActionTypeBase {
    type: string;
};

export interface IChartActionType extends IActionTypeBase {
   id: string;
   title: string;
   labels: [];
   data: [];
}
