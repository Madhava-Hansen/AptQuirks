import {
  RECEIVE_DELETE_LIKE,
  RECEIVE_CURRENT_LIKE,
  RECEIVE_LIKE_ERRORS,
  RECEIVE_LIKES,
} from "../actions/like_actions";
import merge from "lodash/merge";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_LIKE:
      let likeId = newState.likes.length;
      newState["likes"][likeId] = action.like;
      return newState;
    case RECEIVE_LIKES:
      newState["likes"] = action.likes;
      return newState;
    case RECEIVE_LIKE_ERRORS:
      newState["errors"] = action.errors;
      return newState;
    case RECEIVE_DELETE_LIKE:
      newState["likes"] = newState.likes.filter(
        (like) => like.id !== action.like.id
      );
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
