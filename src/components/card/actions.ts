import { ICard } from './types';

export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

interface AddCardAction {
  type: typeof ADD_CARD;
  payload: ICard;
}

interface EditCardAction {
  type: typeof EDIT_CARD;
  payload: ICard;
}

interface DeleteCardAction {
  type: typeof DELETE_CARD;
  payload: ICard;
}

export const addCard = (newCard: ICard): AddCardAction => {
  return {
    type: ADD_CARD,
    payload: newCard,
  };
};

export const editCard = (newCard: ICard): EditCardAction => {
  return {
    type: EDIT_CARD,
    payload: newCard,
  };
};
export const deleteCard = (card: ICard): DeleteCardAction => {
  return {
    type: DELETE_CARD,
    payload: card,
  };
};

export type CardActionTypes = AddCardAction | EditCardAction | DeleteCardAction;