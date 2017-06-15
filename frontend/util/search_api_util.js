export const createApartment = apartment => {
  return $.ajax({
    method: 'POST',
    url: 'https://apartmentquirks.herokuapp.com/api/apartments',
    data: apartment
  });
};

export const fetchApartments = ids => {
  return $.ajax({
    method: 'GET',
    url: 'https://apartmentquirks.herokuapp.com/api/apartments',
    data: ids
  });
};

export const fetchApartment = id => {
  return $.ajax({
    method: 'GET',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${id}`,
    data: id
  });
};
