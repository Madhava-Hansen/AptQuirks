import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  search: searchReducer
});

export default rootReducer;
