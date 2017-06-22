json.extract! @quirk, :title, :body, :id, :apartment_id, :user_name, :user_pic, :apt_number
json.created_at time_ago_in_words(@quirk.created_at)
