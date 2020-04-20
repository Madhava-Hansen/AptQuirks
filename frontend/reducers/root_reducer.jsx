import {combineReducers} from "redux";
import sessionReducer from "./session_reducer";
import apartmentSearchReducer from "./apartment_search_reducer";
import conversationsReducer from "./conversation_reducer";
import imageReducer from "./image_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  apartmentShow: apartmentSearchReducer,
  conversationsIndex: conversationsReducer,
  images: imageReducer
});

export default rootReducer;
