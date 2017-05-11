export const createApartment = apartment => {
  return $.ajax({
    type: 'POST',
    url: 'api/apartments',
    apartment
  });
};
