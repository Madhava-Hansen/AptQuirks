export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_CONVERSATION_ERRORS = "RECEIVE_CONVERSATION_ERRORS";
export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";
import * as APIUtil from "../util/conversation_api_util";


export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

const receiveConversations = (conversations) => ({
  type: RECEIVE_CONVERSATIONS,
  conversations,
});

export const receiveConversation = (conversation) => ({
  type: RECEIVE_CONVERSATION,
  conversation,
});

const receiveConversationErrors = (errors) => ({
  type: RECEIVE_CONVERSATION_ERRORS,
  errors,
});

export const fetchUsers = userName => dispatch =>
  APIUtil.fetchUsers(userName).then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveMessageErrors(errors.responseJSON))
  );

export const createMessage = ids => dispatch =>
  APIUtil.createMessage(ids).then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  );

export const fetchConversations = () => (dispatch) =>
  APIUtil.fetchConversations().then(
    conversations => dispatch(receiveConversations(conversations)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  );

export const createConversation = (ids) => (dispatch) =>
  APIUtil.createConversation(ids).then(
    conversation => dispatch(receiveConversation(conversation)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  );

export const fetchConversation = (id) => (dispatch) =>
  APIUtil.fetchConversation(id).then(
    conversation => dispatch(receiveConversation(conversation)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  );

export const deleteConversations = ids => dispatch => 
  APIUtil.deleteConversations(ids).then(
    conversations => dispatch(receiveConversations(conversations)),
    errors => dispatch(receiveConversationErrors(errors.responseJSON))
  )
