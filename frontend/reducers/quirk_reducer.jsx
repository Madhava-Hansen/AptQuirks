import { RECEIVE_QUIRKS, RECEIVE_QUIRK_ERRORS, RECEIVE_QUIRK } from '../actions/quirk_actions';
import merge from 'lodash/merge';

const quirksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_QUIRKS:
      const quirks = action.quirks;
      return quirks;
    case RECEIVE_QUIRK:
      const newQuirk = action.quirk;
      return merge({}, state, { newQuirk });
    case RECEIVE_QUIRK_ERRORS:
      const errors = action.errors;
      return errors;
    default:
      return state;
  }
}

export default quirksReducer;
