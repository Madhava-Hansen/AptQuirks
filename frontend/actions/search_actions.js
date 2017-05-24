import * as APIUtil from '../util/search_api_util';
export const RECEIVE_APARTMENT = "RECEIVE_APARTMENT";
export const RECEIVE_APARTMENT_ERRORS = "RECEIVE_APARTMENT_ERRORS";

const receiveApartment = apartment => ({
  type: RECEIVE_APARTMENT,
  apartment
});

const receiveErrors = err => ({
  type: RECEIVE_APARTMENT_ERRORS,
  err
});

export const createApartment = apartment => dispatch => (
  APIUtil.createApartment(apartment)
  .then(apartment => dispatch(receiveApartment(apartment)),
  err => dispatch(receiveErrors(err.responseJSON)))
);
