export const addQuirk = (quirk) => {
  return $.ajax({
    method: "POST",
    url: `/api/apartments/${quirk.apartment_id}/quirks`,
    data: quirk,
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
