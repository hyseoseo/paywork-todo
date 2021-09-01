export const BASE_URL = 'http://localhost:3001';

export interface Itodo {
  id: string;
  content: string;
  isChecked: boolean;
  createdAt: Date;
}
