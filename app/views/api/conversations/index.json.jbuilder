json.array! @conversations do |conversation|
  json.id conversation.id
  json.receiver_username conversation.receiver_username
  json.receiver_image_url conversation.receiver_image_url
  json.sender_username conversation.sender_username
end
