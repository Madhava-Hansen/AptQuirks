export const createApartment = apartment => {
  return $.ajax({
    method: "POST",
    url: "/api/apartments",
    data: apartment,
  });
};

export const fetchApartments = ids => {
  return $.ajax({
    method: "GET",
    url: "/api/apartments",
    data: ids,
  });
};

export const fetchApartment = id => {
  return $.ajax({
    method: "GET",
    url: `/api/apartments/${id}`,
    data: id,
  });
};
