export const RECEIVE_USERS = "RECEIVE_USERS";
import * as APIUtil from "../util/message_api_util";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUsers = userName => dispatch =>
  APIUtil.fetchUsers(userName).then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveMessageErrors(errors.responseJSON))
  );
