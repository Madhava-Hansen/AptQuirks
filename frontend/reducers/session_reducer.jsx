import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';


const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, state, { currentUser });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.err;
      return merge({}, state, { errors });
    default:
      return state;
  };
};

export default sessionReducer;
