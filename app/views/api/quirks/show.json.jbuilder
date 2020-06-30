json.extract! @quirk, :title, :body, :id, :apartment_id, :user_name, :user_pic, :apt_number, :star_rating, :user_id, :neighborhood_star_rating, :noise_star_rating, :landlord_star_rating
json.created_at time_ago_in_words(@quirk.created_at)
