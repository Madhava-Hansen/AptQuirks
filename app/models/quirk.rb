# == Schema Information
#
# Table name: quirks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  body         :string           not null
#  apartment_id :integer          not null
#  user_id      :integer          not null
#  apt_number   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_name    :string
#

class Quirk < ApplicationRecord

  validates :title, :body, :apartment_id, :user_id, :user_name, :user_pic, presence: true

  belongs_to :apartment,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Apartment"

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

end
