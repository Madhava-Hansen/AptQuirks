# == Schema Information
#
# Table name: apartments
#
#  id             :integer          not null, primary key
#  street_address :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :integer          not null
#  lon            :integer          not null
#  longitude      :float
#  latitude       :float            not null
#

class Apartment < ApplicationRecord

  validates :street_address, presence: true, uniqueness: true
  validates :latitude, :longitude, presence: true

  has_many :quirks,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Quirk"

  has_many :likes,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Like"

  has_many :images,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Image"


end
