// Action types
import * as actionTypes from "./actionTypes";

// Action creators
export const startExam = () => {
  return {
    type: actionTypes.START_EXAM,
  };
};

export const answerQuestion = (questionNum: number, result: boolean) => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    payload: {
      questionNum,
      result,
    },
  };
};
