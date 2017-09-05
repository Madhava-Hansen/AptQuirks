import { RECEIVE_LIKE, RECEIVE_CURRENT_LIKE, RECEIVE_LIKE_ERRORS, RECEIVE_LIKES } from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
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
    default:
      return state;
  }
}

export default likesReducer;
