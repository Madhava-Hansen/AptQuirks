import * as APIUtil from '../util/search_api_util';
export const RECEIVE_APARTMENT = "RECEIVE_APARTMENT";
export const RECEIVE_APARTMENT_ERRORS = "RECEIVE_APARTMENT_ERRORS";
export const RECEIVE_APARTMENTS = "RECEIVE_APARTMENTS";

const receiveApartment = apartment => ({
  type: RECEIVE_APARTMENT,
  apartment
});

const receiveErrors = err => ({
  type: RECEIVE_APARTMENT_ERRORS,
  err
});

const receiveApartments = apartments => ({
  type: RECEIVE_APARTMENTS,
  apartments
});

export const createApartment = apartment => dispatch => (
  APIUtil.createApartment(apartment)
  .then(apartment => dispatch(receiveApartment(apartment)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchApartments = ids => dispatch => (
  APIUtil.fetchApartments(ids)
  .then(apartments => dispatch(receiveApartments(apartments)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const fetchApartment = id => dispatch => (
  APIUtil.fetchApartment(id)
  .then(apartment => dispatch(receiveApartment(apartment)),
  errors => dispatch(receiveErrors(errors.responseJSON)))
)
