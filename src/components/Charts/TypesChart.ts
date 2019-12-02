import {DAILY, MONTHLY, FORYEAR} from '../../constants/typesCharts';

export interface ITypeChart
{
    id: number;
    type: string;
    description: string;
}

export const TypesChart: ITypeChart[] =
[
    {
        id: 1,
        type: DAILY,
        description: "get a daily report"
    },
    {
        id: 2,
        type: MONTHLY,
        description: "get a monthly report"
    },
    {
        id: 3,
        type: FORYEAR,
        description: "get a report for the year"
    }
];
