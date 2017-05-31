json.array! (@quirks) do |quirk|
  json.title quirk.title
  json.body quirk.body
  json.id quirk.id
  json.apartment_id quirk.apartment_id
  json.created_at quirk.created_at.to_date
  json.user_name quirk.user_name
end
