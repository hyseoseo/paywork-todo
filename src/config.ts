export const BASE_URL = 'http://localhost:3001';

export interface Itodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}

export const dateCountry = 'en-US';

export const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export interface IProps {
  todos: Itodo[];
}
