export interface Question {
  id: number,
  title: string,
}


export const questionsList: Array<Question> = [
  { id: 1, title: 'Comment contacter le service client ?' },
  { id: 2, title: 'Comment contacter le service facturation ?' },
  { id: 3, title: 'Comment obtenir mes factures ?' },
];
