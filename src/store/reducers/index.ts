// Action types
import * as actionTypes from "../actions/actionTypes";

// Initial state
const initialState = {
  questionNum: 1,
};

// Reducer
const questionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ANSWER_QUESTION:
      return { ...state, questionNum: action.payload };
    default:
      return { ...state };
  }
};

// Export the reducer
export default questionsReducer;
