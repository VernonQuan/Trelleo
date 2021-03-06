import { IList } from '../list/types';
import { ADD_CARD, EDIT_CARD, DELETE_CARD, CardActionTypes, ICard } from './types';

export const addCard = ({ newCard, parentList }: { newCard: ICard; parentList: IList }): CardActionTypes => {
  return {
    type: ADD_CARD,
    payload: { newCard, parentList },
  };
};

export const editCard = ({ card, parentList }: { card: ICard; parentList: IList }): CardActionTypes => {
  return {
    type: EDIT_CARD,
    payload: { card, parentList },
  };
};

export const deleteCard = ({ card, parentList }: { card: ICard; parentList: IList }): CardActionTypes => {
  return {
    type: DELETE_CARD,
    payload: { card, parentList },
  };
};
