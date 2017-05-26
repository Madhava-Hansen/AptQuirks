class Apartment < ApplicationRecord

  has_many :quirks,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Quirk"


  validates :street_address, presence: true, uniqueness: true
  validates :lon, presence: true
  validates :lat, presence: true
  validates :latitude, presence: true
  validates :latitude, presence: true
end
