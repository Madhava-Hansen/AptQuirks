export const like = like => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/apartments/${like.apartment_id}/likes`,
    data: like
  });
};

export const unlike = like => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/apartments/${like.apartment_id}/likes/${like.id}`,
    data: like
  });
};

export const fetchLikes = apartment_id => {
  return $.ajax({
    method: 'GET',
    url: `/api/apartments/${apartment_id}/likes`
  });
};
