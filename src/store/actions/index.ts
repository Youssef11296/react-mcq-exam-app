// Action types
import * as actionTypes from "./actionTypes";

// Action creators
export const answerQuestion = (questionNum: number): Action => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    payload: questionNum++,
  };
};
