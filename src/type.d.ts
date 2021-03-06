interface IUser {
  id: number;
  name: string;
  email: string;
}

type ListState = {
  lists: IList[];
};

type ListAction = {
  type: string;
  list: IList;
};

interface IList {
  id: number;
  title: string;
  cards: ICard[];
}

type DispatchType = (args: ListAction) => ListAction;
