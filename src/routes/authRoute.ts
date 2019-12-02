import {HOME} from '../constants/routes';

export interface IRoute
{
    id: number;
    path: string;
    description: string;
}

export const NonAuthRoutes: IRoute[] =
[
    {
        id: 1,
        path: HOME,
        description: 'Home',
    }
];
