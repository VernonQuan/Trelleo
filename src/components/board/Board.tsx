import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { createNewList } from '../list/actions';
import List from '../list/List';
import { ADD_LIST } from '../list/types';
import './Board.scss';

const Board = () => {
  const { board } = useSelector((state: AppState) => state);
  const [createList, setCreateList] = useState(false);
  const [createListText, setCreateListText] = useState('');
  const { lists, title } = board;
  const dispatch = useDispatch();

  const toggleCreateList = () => {
    setCreateList(!createList);
  };

  const onSubmitList = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitList();
  };

  const onChangeListText = (e: ChangeEvent<HTMLInputElement>): void => {
    setCreateListText(e.target.value);
  };

  const submitList = () => {
    if (createListText.trim() === '') {
      return;
    }
    dispatch({
      type: ADD_LIST,
      payload: {
        list: {
          id: lists[lists.length - 1].id + 1,
          title: createListText,
          cards: [],
        },
      },
    });
    setCreateListText('');
  };

  return (
    <div className="Board">
      <div>{title}</div>
      <div className="ListContainer">
        {lists.map((list) => (
          <List key={`${list.title}-${list.id}`} {...list} />
        ))}
        {createList ? (
          <form onSubmit={onSubmitList}>
            <input
              autoFocus
              type="text"
              onBlur={toggleCreateList}
              onChange={onChangeListText}
              placeholder="Enter list title..."
              value={createListText}
            />
            <input type="submit" />
            <span onClick={toggleCreateList}>X</span>
          </form>
        ) : (
          <div onClick={toggleCreateList} className="openAddList">
            Add {lists.length > 0 ? 'another' : 'a'} list
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
