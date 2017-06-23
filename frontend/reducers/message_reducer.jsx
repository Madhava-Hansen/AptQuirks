import { RECEIVE_MESSAGES, CREATE_MESSAGE } from '../actions/message_actions';
import merge from 'lodash/merge';

const messagesReducer = ({state = {}, action }) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      const messages = action.messages;
      return messages;
    case RECEIVE_MESSAGE:
      const message = action. message;
      return merge({}, state, { message });
    case RECEIVE_MESSAGE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default messagesReducer;
