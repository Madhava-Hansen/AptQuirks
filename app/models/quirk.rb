class Quirk < ApplicationRecord

  validates :title, :body, :apartment_id, :user_id, presence: true

  belongs_to :apartment,
    primary_key: :id,
    foreign_key: :apartment_id,
    class_name: "Apartment"

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

end
