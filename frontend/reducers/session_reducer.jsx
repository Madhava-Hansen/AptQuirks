import { merge } from 'lodash/merge';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(object.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      return merge({}, state, { errors })
    default:
      return state
  };
};

export default sessionReducer;
