export const URL = 'http://localhost:3001/todo';

export interface Itodo {
  id: number;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}
