import { IBoard } from '../board/types';
import { ADD_CARD, CardActionTypes, DELETE_CARD, EDIT_CARD } from '../card/types';
import { sampleBoard } from '../constants/constants';
import { ADD_LIST, DELETE_LIST, EDIT_LIST, ListActionTypes } from './types';

const initialState: IBoard = sampleBoard;

const listReducer = (state: IBoard = initialState, action: ListActionTypes | CardActionTypes): IBoard => {
  if (action.payload === undefined) {
    return state;
  }
  const { lists } = state;
  const { list } = action.payload;

  const indexOfList = lists.findIndex((listToFind) => listToFind.id === list.id);
  switch (action.type) {
    case ADD_LIST:
      return Object.assign({}, state, {
        lists: [...lists, list],
      });
    case EDIT_LIST:
      console.log(indexOfList);
      return Object.assign({}, state, {
        lists: [...lists.slice(0, indexOfList), list, ...lists.slice(indexOfList + 1)],
      });
    case DELETE_LIST:
      return Object.assign({}, state, {
        lists: state.lists.filter((boardList) => boardList.id !== list.id),
      });
    case ADD_CARD:
      return Object.assign({}, state, {
        lists: [
          ...lists.slice(0, indexOfList),
          {
            id: list.id,
            title: list.title,
            cards: [...list.cards, action.payload.card],
          },
          ...lists.slice(indexOfList + 1),
        ],
      });
    case EDIT_CARD:
      const indexOfCard = lists[indexOfList].cards.findIndex((listCard) => listCard.id === action.payload.card.id);
      return Object.assign({}, state, {
        lists: [
          ...lists.slice(0, indexOfList),
          {
            id: list.id,
            title: list.title,
            cards: [
              ...lists[indexOfList].cards.slice(0, indexOfCard),
              action.payload.card,
              ...lists[indexOfList].cards.slice(indexOfCard + 1),
            ],
          },
          ...lists.slice(indexOfList + 1),
        ],
      });
    case DELETE_CARD:
      return Object.assign({}, state, {
        lists: [
          ...lists.slice(0, indexOfList),
          {
            id: list.id,
            title: list.title,
            cards: list.cards.filter((listCard) => listCard.id !== action.payload.card.id),
          },
          ...lists.slice(indexOfList + 1),
        ],
      });
  }
};

export default listReducer;
