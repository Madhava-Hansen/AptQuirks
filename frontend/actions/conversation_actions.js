export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_CONVERSATION_ERRORS = "RECEIVE_CONVERSATION_ERRORS";
import * as APIUtil from '../util/conversation_api_util';

const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

const receiveConversationErrors = errors => ({
  type: RECEIVE_CONVERSATION_ERRORS,
  errors
});

export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(
    conversations => dispatch(receiveConversations(conversations)),
  errors => dispatch(receiveConversationErrors(errors.responseJSON))
  )
)

export const createConversation = ids => dispatch => (
  APIUtil.createConversation(ids).then(
    conversation => dispatch(receiveConversation(conversation)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  )
)

export const fetchConversation = id => dispatch => (
  APIUtil.fetchConversation(id).then(
    conversation => dispatch(receiveConversation(conversation)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  )
)
