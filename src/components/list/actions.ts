import { ADD_LIST, DELETE_LIST, EDIT_LIST, IList, ListActionTypes } from './types';

export const addList = (newList: IList): ListActionTypes => {
  return {
    type: ADD_LIST,
    payload: newList,
  };
};

export const editList = (list: IList): ListActionTypes => {
  return {
    type: EDIT_LIST,
    payload: list,
  };
};

export const deleteList = (list: IList): ListActionTypes => {
  return {
    type: DELETE_LIST,
    payload: list,
  };
};
