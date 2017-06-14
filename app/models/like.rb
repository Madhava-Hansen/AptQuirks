# == Schema Information
#
# Table name: likes
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  apartment_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  status       :string
#

class Like < ApplicationRecord

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :apartment,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Apartment"
    
end
