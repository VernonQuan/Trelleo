import { ICard } from '../card/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useState } from 'react';
import { sidebarItems } from './sidebarItems';
import './CardModal.scss';

const CardModal = (props: { card: ICard; parentList: IList }): JSX.Element => {
  const [editDescription, setEditDescription] = useState(false);
  const [description, setDescription] = useState('');
  const { card, parentList } = props;

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setDescription(value);
  };

  const toggleSetDescription = (): void => {
    setEditDescription(!editDescription);
  };

  return (
    <div className="modalContainer">
      <div className="modalHeader">
        <span className="cardIcon">
          <FontAwesomeIcon icon={faCreditCard} />
        </span>
        <span className="cardDescription">
          <span className="cardTitle">{card.title}</span>
          <span className="fromList">
            in list <span className="parentName">{parentList.title}</span>
          </span>
        </span>
      </div>
      <div className="modalMainCol">
        <div className="textArea">
          <div className="descriptionIcon">
            <FontAwesomeIcon icon={faAlignJustify} />
          </div>
          <div className="description">
            <div className="descriptionLabel">Description</div>
            <div className="descriptionEdit">
              {!editDescription && description === '' && (
                <div className="editDescriptionButton" onClick={toggleSetDescription}>
                  Add a more detailed description...
                </div>
              )}
              {!editDescription && description !== '' && <div className="descriptionText">{description}</div>}
              {editDescription && (
                <textarea
                  onChange={handleDescriptionChange}
                  className="descriptionTextArea"
                  value={description}
                  placeholder="Add a more detailed description..."
                />
              )}
            </div>
          </div>
        </div>
        <div className="modalSidebar">
          <div className="sidebarTitle">Add to Card</div>
          <div className="sidebarItems">
            {sidebarItems.map((sidebarItem) => (
              <div key={sidebarItem.name} className="sidebarItem">
                <span className="sidebarItemIcon">
                  <FontAwesomeIcon icon={sidebarItem.icon} />
                </span>
                <span className="sidebarItemName">{sidebarItem.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
