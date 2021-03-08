import { faEllipsisH, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import List from '../list/List';
import { ADD_LIST } from '../list/types';
import Menu from '../menu/Menu';
import './Board.scss';
import '../shared/shared.scss';

const Board = (): JSX.Element => {
  const {
    board: { lists, title },
  } = useSelector((state: AppState) => state);
  const [createList, setCreateList] = useState(false);
  const [createListText, setCreateListText] = useState('');
  const [showMenu, setShowMenu] = useState(false);
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
    const newId = lists.length > 0 ? lists[lists.length - 1].id + 1 : 0;
    dispatch({
      type: ADD_LIST,
      payload: {
        list: {
          id: newId,
          title: createListText.trim(),
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
        <div className="newListContainer">
          {createList ? (
            <div className="addList">
              <form onSubmit={onSubmitList}>
                <input
                  autoFocus
                  className="addListText"
                  type="text"
                  onBlur={toggleCreateList}
                  onChange={onChangeListText}
                  placeholder="Enter list title..."
                  value={createListText}
                />
                <input className="submitButton" type="submit" value="Add List" />
                <span className="cancelButton" onClick={toggleCreateList}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </form>
            </div>
          ) : (
            <div onClick={toggleCreateList} className="openAddList">
              <span className="addIcon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <span>{`Add ${lists.length > 0 ? 'another' : 'a'} list`}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
