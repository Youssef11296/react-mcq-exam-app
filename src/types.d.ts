interface Action {
  type: string;
  payload: any;
}

interface Question {
  id: number;
  number?: number;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface User {
  name: string;
  email: string;
  password: string;
}
