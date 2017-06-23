import { RECEIVE_CONVERSATIONS, CREATE_CONVERSATION } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const conversationsReducer = ({state = {}, action }) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONVERSATIONS:
      const conversations = action.conversations;
      return conversations;
    case RECEIVE_CONVERSATION:
      const conversation = action. conversation;
      return merge({}, state, { conversation });
    case RECEIVE_CONVERSATION_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default conversationsReducer;
