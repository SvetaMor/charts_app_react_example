import {IStoreStructure} from '../entities/StoreStructure';
import {Reducer} from 'redux';
import {IActionTypeBase} from '../actions/actionTypes';
import {DAY_OPTION, MONTH_OPTION, YEAR_OPTION} from '../actions/chartAction';

export const newReducer: Reducer<any> =
   (state: IStoreStructure, action: IActionTypeBase) =>
   {
      switch(action.type) {
         case DAY_OPTION:
            console.log('DAY_OPTION (action in reducer');
            break;
         case MONTH_OPTION:
            console.log('MONTH_OPTION (action in reducer');
            break;
         case YEAR_OPTION:
            console.log('YEAR_OPTION (action in reducer');
            break;
         default:
            return state;
      }
   }

export default newReducer;
