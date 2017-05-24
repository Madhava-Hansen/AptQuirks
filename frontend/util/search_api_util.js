export const createApartment = apartment => {
  return $.ajax({
    method: 'POST',
    url: '/api/apartments',
    data: apartment
  });
};
