export const fetchConversations = () => {
  return $.ajax({
    method: "GET",
    url: `/api/conversations`,
  });
};

export const createConversation = ids => {
  return $.ajax({
    method: "POST",
    url: `/api/conversations`,
    data: ids,
  });
};

export const fetchConversation = id => {
  return $.ajax({
    method: "GET",
    url: `/api/conversations/${id}`,
    data: {conversation: {id: id}},
  });
};

export const deleteConversations = conversation => {
  return $.ajax({
    method: "DELETE",
    url: '/api/conversations/57849',
    data: conversation
  })
}

export const createMessage = (message) => {
  return $.ajax({
    method: "POST",
    url: `/api/messages`,
    data: message,
  });
};
