import {ReactType} from 'react';
import {IClassNameProps} from '@bem-react/core';

export interface IButtonProps extends IClassNameProps
{
    onClick: () => void;
    value: string|null;
    className: string;
    as?: ReactType;
}
