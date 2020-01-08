import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CAPTCHA_RESPONSE = "RECEIVE_CAPTCHA_RESPONSE"


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = err => ({
  type: RECEIVE_SESSION_ERRORS,
  err
});

const receiveCaptchaResponse = response => ({
  type: RECEIVE_CAPTCHA_RESPONSE,
  response
});

export const login = user => dispatch => (
  APIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
  .then(user => dispatch(receiveCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const verifyCaptcha = response => dispatch => (
  APIUtil.verifyCaptcha(response)
  .then(responseObject => dispatch(receiveCaptchaResponse(responseObject.response)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const addPhoto = user => dispatch => (
  APIUtil.addPhoto(user)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => dispatch(receiveErrors(err.responseJSON)))
);
