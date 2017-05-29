json.array! @likes do |like|
  json.user_id like.user_id
  json.apartment_id like.apartment_id
  json.id like.id
end
