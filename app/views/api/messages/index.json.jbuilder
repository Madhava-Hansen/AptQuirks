json.array! @messages do |message|
  json.body message.body
  json.user_id message.user_id
  json.read message.read
  json.id message.id
end
