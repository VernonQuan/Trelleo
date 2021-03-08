import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import { DELETE_CARD, ICard } from './types';
import { getInitials } from '../constants/helperFunctions';
import './Card.scss';
import { useDispatch } from 'react-redux';

interface cardProp {
  card: ICard;
  parentList: IList;
}

export const Card = (props: cardProp): JSX.Element => {
  const [hoverState, setHoverState] = useState(false);
  const dispatch = useDispatch();
  const { card, parentList } = props;
  const { title, members } = card;

  const onHoverEnter = (): void => {
    setHoverState(true);
  };

  const onHoverLeave = (): void => {
    setHoverState(false);
  };

  const deleteCard = (): void => {
    dispatch({
      type: DELETE_CARD,
      payload: {
        card,
        list: parentList,
      },
    });
  };

  return (
    <div className="card" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <div className="cardRow1">
        <span className="cardTitle">{title}</span>
        <span onClick={deleteCard}>
          <FontAwesomeIcon className="deleteButton" icon={faTimes} visibility={hoverState ? 'visible' : 'hidden'} />
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faEye} />
      </div>
      <span>
        {members.map((member, index) => (
          <span className="userCircle" key={`${member}-${index}`}>
            {getInitials(member)}
          </span>
        ))}
      </span>
    </div>
  );
};
