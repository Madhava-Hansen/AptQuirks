import { RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS,
  RECEIVE_USERS,
  RECEIVE_USER }
from '../actions/message_actions';
import merge from 'lodash/merge';

const messagesReducer = (state = { messages: {} }, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      newState["messages"] = action.messages;
      return newState;
    case RECEIVE_MESSAGE:
      let newMessageId = newState.messages.length;
      newState["messages"][newMessageId] = action.message;
      return newState;
    case RECEIVE_USERS:
      newState["users"] = action.users;
      return newState;
    case RECEIVE_USER:
      newState["receiver"] = action.user;
      return newState;
    case RECEIVE_MESSAGE_ERRORS:
      newState["errors"] = action.errors;
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;
