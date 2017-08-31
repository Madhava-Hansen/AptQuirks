import { RECEIVE_LIKE, RECEIVE_CURRENT_LIKE, RECEIVE_LIKE_ERRORS, RECEIVE_LIKES } from '../actions/like_actions';
import merge from 'lodash/merge';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_LIKE:
      const currentLike = action.like;
      return merge({}, state, { currentLike });
    case RECEIVE_LIKES:
      const likesIndex = action.likes;
      return likesIndex;
    case RECEIVE_LIKE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default likesReducer;
