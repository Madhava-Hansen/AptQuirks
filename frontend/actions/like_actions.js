import * as APIUtil from '../util/like_api_util';
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";
export const RECEIVE_CURRENT_LIKE = "RECEIVE_CURRENT_LIKE";

const receiveCurrentLike = like => ({
  type: RECEIVE_CURRENT_LIKE,
  like
});

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

const receiveLikeErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors
});


export const like = like => dispatch => (
  APIUtil.like(like).then(
    like => dispatch(receiveCurrentLike(like)),
    errors => dispatch(receiveLikeErrors(errors.responseJSON))
  )
);

export const unlike = currentLike => dispatch => (
  APIUtil.unlike(currentLike).then(
    () => () => {},
    errors => dispatch(receiveQuirkErrors(errors.responseJSON))
  )
);

export const fetchLikes = apartment_id => dispatch => (
  APIUtil.fetchLikes(apartment_id).then(
    likes => dispatch(receiveLikes(likes)),
    errors => dispatch(receiveLikeErrors(errors.responseJSON))
  )
);

export const fetchLikeStatus = like => dispatch => (
  APIUtil.fetchLikeStatus(like).then(
    like => dispatch(receiveCurrentLike(like)),
    errors => dispatch(receiveLikeErrors(errors.responseJSON))
  )
);
