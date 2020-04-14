import {
  RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  RECEIVE_CONVERSATION_ERRORS,
  RECEIVE_MESSAGE,
  RECEIVE_USERS
} from "../actions/conversation_actions";
import merge from "lodash/merge";

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      newState["users"] = action.users;
      return newState;
    case RECEIVE_MESSAGE: 
      newState.currentConversation.messages.push(action.message);
      return newState;
    case RECEIVE_CONVERSATIONS:
      newState["conversations"] = action.conversations;
      return newState;
    case RECEIVE_CONVERSATION:
      newState["currentConversation"] = action.conversation;
      return newState;
    case RECEIVE_CONVERSATION_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default conversationsReducer;
