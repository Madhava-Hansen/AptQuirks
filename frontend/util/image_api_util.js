export const addImage = image => {
  return $.ajax({
    method: 'POST',
    url: `api/apartments/${image.apartment_id}/images`,
    data: image
  });
};

export const fetchImages = ids => {
  return $.ajax({
    method: 'GET',
    url: `api/apartments/${ids.apartment_id}/images`,
    data: ids
  });
};
