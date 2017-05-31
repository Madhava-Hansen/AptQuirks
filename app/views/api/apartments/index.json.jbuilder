json.array! @apartments do |apartment|
  json.street_address apartment.street_address
  json.longitude apartment.longitude
  json.latitude apartment.latitude
  json.id apartment.id
end
