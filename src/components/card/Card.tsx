import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICard } from './types';
import { getInitials } from '../constants/helperFunctions';
import './Card.scss';

export const Card = (props: ICard) => {
  const [hoverState, setHoverState] = useState(false);
  const { title, members } = props;

  const onHoverEnter = () => {
    setHoverState(true);
  };

  const onHoverLeave = () => {
    setHoverState(false);
  };

  return (
    <div className="card" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <span>{title}</span>
      <FontAwesomeIcon className="editButton" icon="pencil-alt" visibility={hoverState ? 'visible' : 'hidden'} />
      <FontAwesomeIcon icon="eye" />
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
