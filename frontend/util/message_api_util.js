export const fetchMessages = conversationId => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages`,
    data: conversationId
  });
};

export const createMessage = message => {
  return $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: message
  });
};

export const fetchUsers = userName => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data: userName
  })
}
