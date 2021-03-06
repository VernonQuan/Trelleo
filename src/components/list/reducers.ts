import { listSample } from '../constants/constants';
import { ADD_LIST, IList, ListActionTypes } from './types';

const initialState: IList[] = listSample;

// export const listReducer = (
//   state: IList[] = initialState,
//   action: ListActionTypes,
// ): IList[] => {
//   switch (action.type) {
//     case ADD_LIST:
//       return [...state, action.payload]
//   }
// }
