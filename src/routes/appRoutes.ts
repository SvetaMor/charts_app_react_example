import {HOME, DETAILED_CHART} from '../constants/routes';
import Home from '../components/Home/Home';
import DetailedChart from '../components/Charts/DetailedChart';

export interface IAppRoute
{
    path: string;
    component: any;
    exact: boolean;
}

export const AppRoutes: IAppRoute[] =
[
    {
        path: HOME,
        component: Home,
        exact: true
    },
    {
        path: DETAILED_CHART,
        component: DetailedChart,
        exact: true
    }
];
