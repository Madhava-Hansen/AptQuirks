import { RECEIVE_QUIRKS, RECEIVE_QUIRK_ERRORS, RECEIVE_QUIRK } from '../actions/quirk_actions';
import merge from 'lodash/merge';

const quirksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_QUIRKS:
      newState["quirks"] = action.quirks;
      return newState;
    case RECEIVE_QUIRK:
      let index = newState.quirks.length;
      newState["quirks"][index] = action.quirk;
      return newState;
    case RECEIVE_QUIRK_ERRORS:
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
}

export default quirksReducer;
