class Conversation < ApplicationRecord
  validates :receiver_id, :sender_id, :receiver_username, :sender_username, :receiver_image_url, presence: true

  has_many :messages

  belongs_to :sender,
    primary_key: :id,
    foreign_key: :sender_id,
    class_name: "User"

  belongs_to :receiver,
    primary_key: :id,
    foreign_key: :receiver_id,
    class_name: "User"

    scope :with, -> (sender_id, receiver_id) do
      where("(conversations.sender_id = ? AND conversations.receiver_id =?)
      OR (conversations.sender_id = ? AND conversations.receiver_id =?)",
      sender_id, receiver_id, receiver_id, sender_id)
    end

end
