import { useState } from 'react';
import { ICard } from './types';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = (props: ICard) => {
  const [hoverState, setHoverState] = useState(false);
  const { title } = props;

  const onHoverEnter = () => {
    setHoverState(true);
  };

  const onHoverLeave = () => {
    setHoverState(false);
  };

  return (
    <div className="card">
      <span>{title}</span>
      <span className="editButton">
        <FontAwesomeIcon icon="pencil-alt" />
      </span>
    </div>
  );
};
