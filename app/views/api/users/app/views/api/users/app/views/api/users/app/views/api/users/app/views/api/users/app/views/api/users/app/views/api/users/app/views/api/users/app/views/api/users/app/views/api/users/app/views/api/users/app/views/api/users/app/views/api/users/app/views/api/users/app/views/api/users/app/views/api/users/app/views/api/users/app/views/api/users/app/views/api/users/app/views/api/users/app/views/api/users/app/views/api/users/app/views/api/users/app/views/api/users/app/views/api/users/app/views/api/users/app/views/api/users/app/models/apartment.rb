class Apartment < ApplicationRecord
  validates :street_address, presence: true, uniqueness: true
  validates :lon, presence: true
  validates :lat, presence: true
end
