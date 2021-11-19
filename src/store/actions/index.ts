// Action types
import * as actionTypes from "./actionTypes";

// Action creators
// login
export const login = (userData: User) => {
  return {
    type: actionTypes.LOGIN,
    payload: userData,
  };
};

// logout
export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
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
