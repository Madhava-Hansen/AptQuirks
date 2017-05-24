import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import apartmentSearchReducer from './apartment_search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  apartmentShow: apartmentSearchReducer
});

export default rootReducer;
