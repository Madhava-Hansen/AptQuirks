export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
import * as APIUtil from '../util/image_api_util';

const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

const receiveImageErrors = errors => ({
  type: RECEIVE_IMAGE_ERRORS,
  errors
})

export const addImage = image => dispatch => (
  APIUtil.addImage(image).then(
    image => dispatch(receiveImage(image)),
    errors => dispatch(receiveImageErrors(errors.responseJSON))
  )
);

export const fetchImages = ids => dispatch => (
  APIUtil.fetchImages(ids).then(
    images => dispatch(receiveImages(images)),
    errors => dispatch(receiveImageErrors(errors.responseJSON))
  )
);
