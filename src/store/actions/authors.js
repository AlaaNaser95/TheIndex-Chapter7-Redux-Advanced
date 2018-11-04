import * as actionCreators from "./actionTypes";
import axios from "axios";
export const fetchAuthors = () => {
  return dispatch => {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors => {
        dispatch({
          type: actionCreators.FETCH_AUTHORS,
          payload: authors
        });
      })
      .catch(err => console.error(err));
  };
};

export const filterAuthors = () => {
  return {
    type: actionCreators.FILTER_AUTHORS
  };
};
