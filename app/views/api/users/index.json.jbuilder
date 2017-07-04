json.array! @users do |user|
  json.username user.username
  json.id user.id
  json.thumbnail_url user.thumbnail_url
end
