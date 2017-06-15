export const addQuirk = quirk => {
  return $.ajax({
    method: 'POST',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${quirk.apartment_id}/quirks`,
    data: quirk
  });
};

export const deleteQuirk = quirk => {
  return $.ajax({
    method: 'DELETE',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${quirk.apartment_id}/quirks/${quirk.id}`,
    data: quirk
  });
};

export const fetchQuirks = apartment_id => {
  return $.ajax({
    mathod: 'GET',
    url: `https://apartmentquirks.herokuapp.com/api/apartments/${apartment_id}/quirks`
  });
};
