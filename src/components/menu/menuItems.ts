import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faEllipsisH, faImage, faSearch, faSignal, faStickyNote } from '@fortawesome/free-solid-svg-icons';

type menuItem = {
  name: string;
  description?: string;
  icon?: IconDefinition;
};

export const menuItems: menuItem[] = [
  {
    name: 'About This board',
    description: 'Add a description to your board',
    icon: faSignal,
  },
  {
    name: 'Change Background',
    icon: faImage,
  },
  {
    name: 'Search Cards',
    icon: faSearch,
  },
  {
    name: 'Stickers',
    icon: faStickyNote,
  },
  {
    name: 'More',
    icon: faEllipsisH,
  },
];
