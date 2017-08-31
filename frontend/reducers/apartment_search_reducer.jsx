import merge from 'lodash/merge';
import { RECEIVE_APARTMENT, RECEIVE_APARTMENT_ERRORS,
RECEIVE_APARTMENTS } from '../actions/search_actions';

const apartmentSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_APARTMENT:
      const curentApartment = action.apartment;
      return curentApartment;
    case RECEIVE_APARTMENTS:
      const apartmentsIndex = action.apartments;
      return apartmentsIndex;
    case RECEIVE_APARTMENT_ERRORS:
      const errors = action.errors;
      return errors;
    default:
      return state;
  };
};

export default apartmentSearchReducer;
