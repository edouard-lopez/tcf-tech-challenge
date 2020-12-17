
export interface Question {
  id: number;
  title: string;
}
export interface Category {
  id: number;
  name: string;
  questions: Array<Question>;
}
