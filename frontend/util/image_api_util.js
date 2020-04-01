export const addImage = (image) => {
  return $.ajax({
    method: "POST",
    url: `/api/apartments/${image.apartment_id}/images`,
    data: image,
  });
};

export const fetchImages = (apartment_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/apartments/${apartment_id}/images`,
    data: { image: { apartment_id: apartment_id } },
  });
};
