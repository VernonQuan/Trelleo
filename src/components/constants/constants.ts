import { IBoard } from '../board/types';
import { IList } from '../list/types';

export const listSample: IList[] = [
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
];

export const sampleBoard: IBoard = {
  id: 0,
  title: 'To Dos',
  lists: listSample,
};
