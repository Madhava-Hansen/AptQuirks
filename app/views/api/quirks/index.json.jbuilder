json.array! (@quirks) do |quirk|
  json.title quirk.title
  json.body quirk.body
  json.id quirk.id
  json.apartment_id quirk.apartment_id
  json.created_at time_ago_in_words(quirk.created_at)
  json.date quirk.created_at
  json.user_name quirk.user_name
  json.user_pic quirk.user_pic
  json.apt_number quirk.apt_number
  json.star_rating quirk.star_rating
  json.user_id quirk.user_id
end
