class Image < ApplicationRecord

  validates :apartment_id, :user_id, :url, presence: true

  belongs_to :apartment

end
