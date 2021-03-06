import { ADD_LIST, DELETE_LIST, IList, ListActionTypes } from "./types";

export const addList = (newList: IList): ListActionTypes => {
  return {
    type: ADD_LIST,
    payload: newList,
  }
}

export const deleteList = (list: IList): ListActionTypes => {
  return {
    type: DELETE_LIST,
    payload: list,
  }
}