json.array! (@quirks) do |quirk|
  json.title quirk.title
  json.body quirk.body
  json.id quirk.id
  json.apartment_id quirk.apartment_id
  json.created_at time_ago_in_words(quirk.created_at)
  json.user_name quirk.user_name
  json.user_pic quirk.user_pic
end
