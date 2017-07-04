import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import apartmentSearchReducer from './apartment_search_reducer';
import quirksReducer from './quirk_reducer';
import likesReducer from './likes_reducer';
import messagesReducer from './message_reducer';
import conversationsReducer from './conversation_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  apartmentShow: apartmentSearchReducer,
  quirksIndex: quirksReducer,
  likes: likesReducer,
  conversationsIndex: conversationsReducer,
  messagesIndex: messagesReducer,
});

export default rootReducer;
