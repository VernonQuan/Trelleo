import { useEffect } from 'react';

export const getInitials = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 1) {
    return names[0][0];
  }
  return `${names[0][0].toUpperCase()}${names[names.length - 1][0].toUpperCase()}`;
};
