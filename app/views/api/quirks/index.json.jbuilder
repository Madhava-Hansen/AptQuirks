json.array! (@quirks) do |quirk|
  json.title quirk.title
  json.body quirk.body
  json.id quirk.id
end
