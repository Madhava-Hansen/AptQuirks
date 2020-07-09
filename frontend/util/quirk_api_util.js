export const addQuirk = data => {
  return $.ajax({
    method: "POST",
    url: `/api/apartments/${data.quirk.apartment_id}/quirks`,
    data: data,
  });
};

export const deleteQuirk = quirk => {
  return $.ajax({
    method: "DELETE",
    url: `/api/apartments/${quirk.apartment_id}/quirks/${quirk.id}`,
    data: quirk,
  });
};

export const fetchQuirks = apartment_id => {
  return $.ajax({
    method: "GET",
    url: `/api/apartments/${apartment_id}/quirks`,
  });
};

export const updateQuirk = (data, apartmentId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/apartments/${apartmentId}/quirks/${data.quirk.id}`,
    data: data
  });
};
