export const like = like => {
  return $.ajax({
    method: 'POST',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${like.apartment_id}/likes`,
    data: like
  });
};

export const unlike = like => {
  return $.ajax({
    method: 'DELETE',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${like.apartment_id}/likes/${like.id}`,
    data: like
  });
};

export const fetchLikes = like => {
  return $.ajax({
    method: 'GET',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${like.apartment_id}/likes`,
    data: like
  });
};
