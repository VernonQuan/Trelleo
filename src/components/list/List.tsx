import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../card/Card';
import { ADD_CARD } from '../card/types';
import { DELETE_LIST, EDIT_LIST, IList } from './types';
import '../shared/shared.scss';
import './List.scss';

const List = (props: IList): JSX.Element => {
  const { title, cards, id } = props;
  const [editingTitle, setEditingTitle] = useState(false);
  const [createNewCard, setCreateNewCard] = useState(false);
  const [newCardText, setNewCardText] = useState('');
  const [titleState, setTitleState] = useState(title);
  const [textareaRows, setTextareaRows] = useState(1);
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();

  const handleTitleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitChange();
  };

  const handleTitleOnBlur = (): void => {
    submitChange();
  };

  const submitChange = (): void => {
    setEditingTitle(false);
    if (titleState.trim() === '') {
      setTitleState(title);
      return;
    }
    dispatch({
      type: EDIT_LIST,
      payload: {
        list: {
          id,
          cards,
          title: titleState,
        },
      },
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleState(e.target.value);
  };

  const toggleCreateNewCard = (): void => {
    setCreateNewCard(true);
  };

  const editText = (): void => {
    setEditingTitle(true);
  };

  const deleteList = (): void => {
    dispatch({
      type: DELETE_LIST,
      payload: {
        list: props,
      },
    });
  };

  const onChangeNewCard = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const lineHeight = 18;
    const oldRows = e.target.rows;
    e.target.rows = 1;
    const newRows = ~~(e.target.scrollHeight / lineHeight);

    if (newRows === oldRows) {
      e.target.rows = newRows;
    }

    setTextareaRows(newRows);
    setNewCardText(e.target.value);
  };

  const onBlurNewCard = (): void => {
    submitNewCard();
    setCreateNewCard(false);
    setNewCardText('');
  };

  const submitNewCard = (): void => {
    if (newCardText.trim() === '') {
      return;
    }
    const newId = cards.length ? cards[cards.length - 1].id + 1 : 0;
    dispatch({
      type: ADD_CARD,
      payload: {
        card: {
          id: newId,
          title: newCardText.trim(),
          members: [],
        },
        list: props,
      },
    });
    setNewCardText('');
  };

  const onCancelCreateCard = (): void => {
    setCreateNewCard(false);
    setNewCardText('');
  };

  const handleKeyPress = (e: any): void => {
    if (e.key === 'Enter' && e.shiftKey === false && createNewCard === true) {
      e.preventDefault();
      submitNewCard();
    }
  };

  return (
    <div className="list">
      <div className="openCardComposer">
        {editingTitle ? (
          <form onSubmit={handleTitleOnSubmit}>
            <input
              autoFocus
              onBlur={handleTitleOnBlur}
              type="text"
              className="title"
              value={titleState}
              onChange={handleOnChange}
            />
          </form>
        ) : (
          <span className="title" onClick={editText}>
            {titleState}
          </span>
        )}
        <span onClick={deleteList} className="deleteButton">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <div className="cardsContainer">
        {cards.map((card) => (
          <Card key={`${card.title}-${card.id}`} {...{ card: card, parentList: props }} />
        ))}
      </div>
      {createNewCard ? (
        <form onSubmit={submitNewCard} className="cardComposer">
          <textarea
            autoFocus
            className="cardComposerTextArea"
            onBlur={onBlurNewCard}
            onChange={onChangeNewCard}
            onKeyPress={handleKeyPress}
            placeholder="Enter a title for this card..."
            ref={textAreaRef}
            rows={textareaRows}
            value={newCardText}
          />
          <span>
            <input className="submitButton" type="submit" value="Add Card" />
          </span>
          <span className="cancelButton">
            <FontAwesomeIcon onClick={onCancelCreateCard} icon={faTimes} />
          </span>
        </form>
      ) : (
        <div className="add" onClick={toggleCreateNewCard}>
          <span className="addIcon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>{`Add ${cards.length > 0 ? 'another' : 'a'} card`}</span>
        </div>
      )}
    </div>
  );
};

export default List;
