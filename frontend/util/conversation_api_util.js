export const fetchConversations = userId => ({
  return $.ajax({
    method: 'GET',
    url: `/api/conversations/${userId}`,
    data: userId
  });
});

export const createConversation = ids => ({
  return $.ajax({
    method: 'POST',
    url: `/api/conversations`,
    data: ids
  });
});
