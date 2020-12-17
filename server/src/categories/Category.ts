import { Question } from "src/questions/Question";

export interface Category {
  id: number,
  name: string,
  questions: Array<Question>
}

