import * as actionTypes from "../actions/actionTypes";
const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      console.log(action);
      return {
        ...state,
        authors: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
