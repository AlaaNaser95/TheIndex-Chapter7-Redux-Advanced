import * as actionTypes from "./actionTypes";
import axios from "axios";
export const fetchAuthorDetail = id => {
  return dispatch => {
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${id}`)
      .then(res => res.data)
      .then(author =>
        dispatch({
          type: actionTypes.FETCH_AUTHOR_DETAIL,
          payload: author
        })
      );
  };
};
