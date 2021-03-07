import { Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { AppActions } from '../board/types';
import { ADD_LIST, DELETE_LIST, EDIT_LIST, IList, ListActionTypes } from './types';

export const addList = (list: IList): ListActionTypes => {
  return {
    type: ADD_LIST,
    payload: { list },
  };
};

export const editList = (list: IList): ListActionTypes => {
  return {
    type: EDIT_LIST,
    payload: { list },
  };
};

export const deleteList = (list: IList): ListActionTypes => {
  return {
    type: DELETE_LIST,
    payload: { list },
  };
};

export const createNewList = (listData: IList) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { id = getState().board.lists.length, title = '', cards = [] } = listData;
    const list = { id, title, cards };

    dispatch(addList(list));
  };
};

export const editExistingList = (listData: IList) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { id = 0, title = '', cards = [] } = listData;
    const list = { id, title, cards };

    dispatch(editList(list));
  };
};

export const deleteExistingList = (listData: IList) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const { id = 0, title = '', cards = [] } = listData;
    const list = { id, title, cards };

    dispatch(deleteList(list));
  };
};
