import { IList } from '../list/types';
import { ICard, CardActionTypes, ADD_CARD } from './types';

const initialState: ICard = {
  id: 0,
  title: 'dummy card',
  members: [],
};

// export const cardReducer = (
//   state = initialState,
//   action: CardActionTypes
// ): IList => {
//   const { payload } = action;
//   switch (action.type) {
//     case ADD_CARD:
//       const indexOfParent =
//       return {

//       }
//   }
// }
