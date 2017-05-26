export const addQuirk = quirk => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: `/api/apartments/${quirk.apartment_id}/quirks`,
    data: quirk
  });
};

export const deleteQuirk = quirk => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/apartments/${quirk.apartment_id}/quirks`,
    data: quirk
  });
};

export const fetchQuirks = apartment_id => {
  debugger;
  return $.ajax({
    mathod: 'GET',
    url: `/api/apartments/${apartment_id}/quirks`
  });
};
