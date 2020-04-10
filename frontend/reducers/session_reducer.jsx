import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_CAPTCHA_RESPONSE,
  RECEIVED_UPDATE_USER
} from "../actions/session_actions";
import merge from "lodash/merge";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVED_UPDATE_USER:
      newState.currentUser = {...state.currentUser, ...action.data};
      return newState;
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, state, { currentUser });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.err;
      return merge({}, state, { errors });
    case RECEIVE_CAPTCHA_RESPONSE:
      return merge({}, state, { captchaResponse: action.response });
    default:
      return state;
  }
};

export default sessionReducer;
