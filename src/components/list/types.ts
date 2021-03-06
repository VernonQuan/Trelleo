import { ICard } from '../card/types';

export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
}

interface AddListAction {
  type: typeof ADD_LIST;
  payload: IList;
}

interface EditListAction {
  type: typeof EDIT_LIST;
  payload: IList;
}

interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: IList;
}

export type ListActionTypes = AddListAction | EditListAction | DeleteListAction;
