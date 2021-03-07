import { faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import List from '../list/List';
import { ADD_LIST } from '../list/types';
import Menu from '../menu/Menu';
import './Board.scss';

const Board = (): JSX.Element => {
  const { board } = useSelector((state: AppState) => state);
  const [createList, setCreateList] = useState(false);
  const [createListText, setCreateListText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const { lists, title } = board;
  const dispatch = useDispatch();

  const toggleCreateList = (): void => {
    setCreateList(!createList);
  };

  const onSubmitList = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitList();
  };

  const onChangeListText = (e: ChangeEvent<HTMLInputElement>): void => {
    setCreateListText(e.target.value);
  };

  const submitList = (): void => {
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

  const toggleMenu = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Board">
      <div>{title}</div>
      <div className="menuBar">
        {!showMenu && (
          <div onClick={toggleMenu} className="menuButton">
            <span className="menuIcon">
              <FontAwesomeIcon icon={faEllipsisH} />
            </span>
            <span>Show Menu</span>
          </div>
        )}
        {showMenu && <Menu {...{ toggleMenu }} />}
      </div>
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
            <FontAwesomeIcon icon={faPlus} />
            {`Add ${lists.length > 0 ? 'another' : 'a'} list`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
