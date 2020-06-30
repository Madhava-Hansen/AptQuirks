json.extract! @quirk, :title, :body, :id, :apartment_id, :user_name, :user_pic, :apt_number, :star_rating, :user_id
json.created_at time_ago_in_words(@quirk.created_at)
