import React, {FC} from 'react';
import {IButtonProps} from './index';

export const Button: FC<IButtonProps> = (
{
   onClick,
   value,
   className,
   as: Component = 'button',
   ...props
}) => (
      <Component {...props} className={[className]}
               onClick={onClick}>
         {value}
      </Component>
   );
