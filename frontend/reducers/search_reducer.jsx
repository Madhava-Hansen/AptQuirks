import merge from 'lodash/merge';
import { RECEIVE_APARTMENT, RECEIVE_ERRORS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_APARTMENT:
      const apartment = action.apartment;
      return merge({}, state, apartment);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
      return state;
  };
};

export default searchReducer;
