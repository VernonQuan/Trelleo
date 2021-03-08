import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.scss';
import { menuItems } from './menuItems';

interface MenuProps {
  toggleMenu: () => void;
}

const Menu = (props: MenuProps): JSX.Element => {
  return (
    <div className="menuContainer">
      <div className="label">
        <span className="labelText">Menu</span>
        <span onClick={props.toggleMenu} className="labelMenuExit">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
      <hr />
      {menuItems.map((menuItem) => (
        <div key={menuItem.name} className="menuItem">
          {menuItem.icon && <FontAwesomeIcon className="menuItemIcon" icon={menuItem.icon} />}
          <div className="menuItemText">
            <span className="menuItemName">{menuItem.name}</span>
            {menuItem.description && <div className="menuItemDescription">{menuItem.description}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
