export const fetchMessages = conversationId => {
  return $.ajax({
    method: 'GET',
    url: `/api/messages/${conversationId}`,
    data: conversationId
  });
};

export const createMessage = ids => {
  return $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: ids
  });
};
