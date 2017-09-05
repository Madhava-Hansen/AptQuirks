import { RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  RECEIVE_CONVERSATION_ERRORS }
  from '../actions/conversation_actions';
import merge from 'lodash/merge';

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONVERSATIONS:
      const conversations = action.conversations;
      return conversations;
    case RECEIVE_CONVERSATION:
      const currentConversation = action.conversation;
      return merge({}, state, { currentConversation })
    case RECEIVE_CONVERSATION_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
}

export default conversationsReducer;
