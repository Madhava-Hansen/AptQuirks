export const fetchConversations = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/conversations`
  });
};

export const createConversation = ids => {
  return $.ajax({
    method: 'POST',
    url: `/api/conversations`,
    data: ids
  });
};

export const fetchConversation = id => {
  return $.ajax({
    method: 'GET',
    url: `api/conversations/${id}`,
    data: id
  })
}
