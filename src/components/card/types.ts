export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export interface ICard {
  id: number;
  title: string;
  members: string[];
}

export interface AddCardAction {
  type: typeof ADD_CARD;
  payload: {
    card: ICard;
    list: IList;
  };
}

export interface EditCardAction {
  type: typeof EDIT_CARD;
  payload: {
    card: ICard;
    list: IList;
  };
}

export interface DeleteCardAction {
  type: typeof DELETE_CARD;
  payload: {
    card: ICard;
    list: IList;
  };
}

export type CardActionTypes = AddCardAction | EditCardAction | DeleteCardAction;
