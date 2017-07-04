class AddSenderUsernameToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :sender_username, :string
  end
end
