// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  questionNum: 1,
  rightAnswersNum: 0,
  user: null,
};

// Reducer
const questionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        questionNum: 1,
        rightAnswersNum: 0,
        user: null,
      };
    case actionTypes.ANSWER_QUESTION:
      console.log(state);
      return {
        ...state,
        questionNum: action.payload.questionNum + 1,
        rightAnswersNum: action.payload.result
          ? state.rightAnswersNum + 1
          : state.rightAnswersNum,
      };
    default:
      return { ...state };
  }
};

// Export the reducer
export default questionsReducer;
