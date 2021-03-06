import { ADD_CARD } from "../../store/actionTypes"
import { CardActionTypes } from "./actions"
import { ICard } from "./types"

const initialState: ICard = {
  id: 0,
  title: 'Dummy title',
  members: [],
}

// export const cardReducer = (
//   state: ICard = initialState,
//   action: CardActionTypes,
// ): ICard => {
//   switch (action.type) {
//     case ADD_CARD:
//       return {

//       }
//   }
// }