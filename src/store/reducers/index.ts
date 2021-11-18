// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  questionNum: 1,
  rightAnswersNum: 0,
};

// Reducer
const questionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.START_EXAM:
      return {
        ...state,
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
