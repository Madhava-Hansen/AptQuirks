export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: 'https://apartmentquirks.herokuapp.com/api/users',
    data: user
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: 'https://apartmentquirks.herokuapp.com/api/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
      method: 'DELETE',
      url: 'https://apartmentquirks.herokuapp.com/api/session'
  });
};

export const addPhoto = photoParams => {

  return $.ajax({
    method: 'PATCH',
    url: `https://apartmentquirks.herokuapp.com/api/users/${photoParams.user.id}`,
    data: photoParams

  })
}
