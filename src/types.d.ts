interface Action {
  type: string;
  payload: any;
}

interface Question {
  id: number;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
