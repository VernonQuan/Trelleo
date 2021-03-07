import { IList } from '../list/types';
import { ADD_CARD, EDIT_CARD, DELETE_CARD, CardActionTypes, ICard } from './types';

export const addCard = ({ card, list }: { card: ICard; list: IList }): CardActionTypes => {
  return {
    type: ADD_CARD,
    payload: { card, list },
  };
};

export const editCard = ({ card, list }: { card: ICard; list: IList }): CardActionTypes => {
  return {
    type: EDIT_CARD,
    payload: { card, list },
  };
};

export const deleteCard = ({ card, list }: { card: ICard; list: IList }): CardActionTypes => {
  return {
    type: DELETE_CARD,
    payload: { card, list },
  };
};
