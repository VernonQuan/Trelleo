import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../card/Card';
import './List.scss';
import { EDIT_LIST, IList } from './types';

const List = (props: IList): JSX.Element => {
  const { title, cards, id } = props;
  const [editingTitle, setEditingTitle] = useState(false);
  const [createNewCard, setCreateNewCard] = useState(false);
  const [newCardText, setNewCardText] = useState('');
  const [titleState, setTitleState] = useState(title);
  const textArea = document.querySelector('textarea');
  const textRowCount = textArea ? textArea.value.split('\n').length : 0;
  const rows = textRowCount + 1;
  const dispatch = useDispatch();

  const handleTitleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submitChange();
  };

  const handleTitleOnBlur = (): void => {
    submitChange();
  };

  const submitChange = () => {
    setEditingTitle(false);
    if (titleState === '') {
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

  const toggleCreateNewCard = () => {
    setCreateNewCard(true);
  };

  const editText = () => {
    setEditingTitle(true);
  };

  const onChangeNewCard = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setNewCardText(e.target.value);
  };

  return (
    <div className="list">
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
        <div className="title" onClick={editText}>
          {titleState}
        </div>
      )}
      {cards.map((card) => (
        <Card key={`${card.title}-${card.id}`} {...card} />
      ))}
      {createNewCard ? (
        <form className="cardComposer">
          <textarea
            className="cardComposerTextArea"
            onChange={onChangeNewCard}
            placeholder="Enter a title for this card..."
            rows={rows}
            value={newCardText}
          />
        </form>
      ) : (
        <div className="add" onClick={toggleCreateNewCard}>{`Add ${cards.length > 0 ? 'another' : 'a'} card`}</div>
      )}
    </div>
  );
};

export default List;
