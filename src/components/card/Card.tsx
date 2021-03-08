import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import CardModal from '../cardModal/CardModal';
import { getInitials } from '../constants/helperFunctions';
import { DELETE_CARD, ICard } from './types';
import './Card.scss';

interface cardProp {
  card: ICard;
  parentList: IList;
}

export const Card = (props: cardProp): JSX.Element => {
  const [hoverState, setHoverState] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const toggleShowModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <div className="card" onClick={toggleShowModal} onMouseEnter={onHoverEnter} onMouseLeave={onHoverLeave}>
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
      <Modal open={showModal} onClose={toggleShowModal}>
        <CardModal {...{ card, parentList }} />
      </Modal>
    </div>
  );
};
