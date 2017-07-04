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
  belongs_to :user
  belongs_to :apartment
end
