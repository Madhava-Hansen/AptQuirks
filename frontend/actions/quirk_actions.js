import * as APIUtil from '../util/quirk_api_util';
export const RECEIVE_QUIRKS = "RECEIVE_QUIRKS";
export const RECEIVE_QUIRK_ERRORS = "RECEIVE_QUIRK_ERRORS";
export const RECEIVE_QUIRK = "RECEIVE_QUIRK";

const receiveQuirks = quirks => {
  return {
    type: RECEIVE_QUIRKS,
    quirks
  }

  };

  const receiveQuirk = quirk => {
    return {
      type: RECEIVE_QUIRK,
      quirk
    }
  };

const receiveQuirkErrors = errors => ({
  type: RECEIVE_QUIRK_ERRORS,
  errors
});

export const addQuirk = quirk => dispatch => (
  APIUtil.addQuirk(quirk).then(
    quirk => dispatch(receiveQuirk(quirk)),
    errors => dispatch(receiveQuirkErrors(errors.responseJSON))
  )
);

export const fetchQuirks = apartment_id => dispatch => (
  APIUtil.fetchQuirks(apartment_id).then(
    quirks => dispatch(receiveQuirks(quirks)),
    errors => dispatch(receiveQuirkErrors(errors.responseJSON))
  )
);
