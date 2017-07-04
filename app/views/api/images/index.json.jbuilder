json.array! @images do |image|
  json.url image.url
  json.apartment_id image.apartment_id
  json.user_id image.user_id
  json.thumbnail_url image.thumbnail_url
end
