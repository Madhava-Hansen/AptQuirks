export const addQuirk = quirk => {
  return $.ajax({
    method: 'POST',
    url: `/api/apartments/${quirk.apartment_id}/quirks`,
    data: quirk
  });
};

export const deleteQuirk = quirk => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/apartments/${quirk.apartment_id}/quirks/${quirk.id}`,
    data: quirk
  });
};

export const fetchQuirks = apartment_id => {
  return $.ajax({
    mathod: 'GET',
    url: `/api/apartments/${apartment_id}/quirks`
  });
};
