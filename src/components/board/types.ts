import { CardActionTypes } from '../card/types';
import { ListActionTypes } from '../list/types';

export interface IBoard {
  id: number;
  title: string;
  lists: IList[];
}

export type AppActions = ListActionTypes | CardActionTypes;
