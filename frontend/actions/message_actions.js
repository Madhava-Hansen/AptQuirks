export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
import * as APIUtil from '../util/message_api_util';

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessageErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const fetchMessages = userId => dispatch => (
  APIUtil.fetchMessages(userId).then(
    messages => dispatch(receiveMessages(messages)),
  errors => dispatch(receiveMessageErrors(errors.responseJSON))
  )
)

export const createMessage = ids => dispatch => (
  APIUtil.createMessage(ids).then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveMessageErrors(errors.responseJSON))
    )
)
