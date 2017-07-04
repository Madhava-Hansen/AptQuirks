class Message < ApplicationRecord

  validates :body, :user_id, :conversation_id, :read, presence: true

  belongs_to :conversation

end
