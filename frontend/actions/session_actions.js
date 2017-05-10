import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = err => ({
  type: RECEIVE_ERRORS,
  err
});

export const login = user => dispatch => (
  APIUtil.login(user).then(
    dispatch(receiveCurrentUser(user)),
    dispatch(receiveErrors(err))
  )
)
