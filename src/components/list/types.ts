import { ICard } from "../card/types";

export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export interface IList {
  id: number;
  title: string;
  cards: ICard[];
}

export interface AddListAction {
  type: typeof ADD_LIST;
  payload: IList;
}

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: IList;
}

export type ListActionTypes = AddListAction | DeleteListAction;