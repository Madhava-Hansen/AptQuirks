export const signup = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user,
  });
};

export const fetchUser = user => {
  return $.ajax({
    method: "GET",
    url: "/api/users/1",
    data: user,
  });
};

export const login = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: user,
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
};

export const verifyCaptcha = response => {
  return $.ajax({
    method: "GET",
    url: "/api/session",
    data: { response: response },
  });
};

export const saveUser = user => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: user,
  });
};

export const addPhoto = photoParams => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${photoParams.user.id}`,
    data: photoParams,
  });
};
