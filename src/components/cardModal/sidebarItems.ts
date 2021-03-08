import {
  faCheckSquare,
  faClock,
  faPaperclip,
  faTag,
  faUser,
  faWindowMaximize,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type sideBarItem = {
  name: string;
  icon: IconDefinition;
};

export const sidebarItems: sideBarItem[] = [
  {
    name: 'Members',
    icon: faUser,
  },
  {
    name: 'Labels',
    icon: faTag,
  },
  {
    name: 'Checklist',
    icon: faCheckSquare,
  },
  {
    name: 'Due Date',
    icon: faClock,
  },
  {
    name: 'Attachment',
    icon: faPaperclip,
  },
  {
    name: 'Cover',
    icon: faWindowMaximize,
  },
];
