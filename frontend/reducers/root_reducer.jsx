import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import apartmentSearchReducer from './apartment_search_reducer';
import quirksReducer from './quirk_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  apartmentShow: apartmentSearchReducer,
  quirksIndex: quirksReducer
});

export default rootReducer;
