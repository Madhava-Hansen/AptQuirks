export const like = ({apartmentId, userId}) => {
  return $.ajax({
    method: 'POST',
    url: `/api/apartments/${apartmentId}/likes`,
    data: {like: {apartment_id: apartmentId, user_id: userId}}
  });
};

export const unlike = ({apartmentId, userId, likeId}) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/apartments/${apartmentId}/likes/${userId}`,
    data: {like: {apartment_id: apartmentId, user_id: userId, id: likeId}}
  });
};

export const fetchLikes = apartment_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/apartments/${apartment_id}/likes`
  });
};
