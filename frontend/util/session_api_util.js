export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    user
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    user
  });
};

export const logout = () => {
  return $.ajax({
      method: 'DELETE',
      url: 'api/session'
  });
};
