import * as actionTypes from './actionTypes';

const initialState: ListState = {
  lists: [
    {
      id: 0,
      title: 'To Do',
      cards: [
        {
          id: 0,
          title: 'My First Task',
          members: [],
        },
      ],
    },
    {
      id: 1,
      title: 'Doing',
      cards: [],
    },
    {
      id: 2,
      title: 'Done',
      cards: [],
    },
  ],
};

const reducer = (state: ListState = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      const newList: IList = {
        id: initialState.lists[initialState.lists.length - 1].id + 1,
        title: action.list.title,
        cards: action.list.cards || [],
      };
      return {
        ...state,
        lists: state.lists.concat(newList),
      };
    case actionTypes.REMOVE_LIST:
      const updatedLists: IList[] = state.lists.filter((list) => list.id !== action.list.id);
      return {
        ...state,
        lists: updatedLists,
      };
  }
  return state;
};

export default reducer;
