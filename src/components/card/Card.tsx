import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { ICard } from './types';
import { getInitials } from '../constants/helperFunctions';
import './Card.scss';

export const Card = (props: ICard): JSX.Element => {
  const [hoverState, setHoverState] = useState(false);
  const { title, members } = props;

  const onHoverEnter = (): void => {
    setHoverState(true);
  };

  const onHoverLeave = (): void => {
    setHoverState(false);
  };

  return (
    <div className="card" onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
      <span>{title}</span>
      <FontAwesomeIcon className="editButton" icon={faPencilAlt} visibility={hoverState ? 'visible' : 'hidden'} />
      <FontAwesomeIcon icon={faEye} />
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
