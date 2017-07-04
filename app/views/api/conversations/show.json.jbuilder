json.extract! @conversation, :id, :receiver_username, :receiver_image_url, :receiver_id, :sender_username
json.receiver @receiver, :username, :thumbnail_url
