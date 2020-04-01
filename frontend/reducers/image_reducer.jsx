import {
  RECEIVE_IMAGE,
  RECEIVE_IMAGES,
  RECEIVE_IMAGE_ERRORS,
} from "../actions/image_actions";
import merge from "lodash/merge";

const imageReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_IMAGE:
      let length = newState["imageIndex"].length;
      newState["imageIndex"][length] = action.image;
      return newState;
    case RECEIVE_IMAGES:
      newState["imageIndex"] = action.images;
      return newState;
    case RECEIVE_IMAGE_ERRORS:
      newState["imageErrors"] = action.errors;
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
