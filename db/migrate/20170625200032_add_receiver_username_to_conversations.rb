class AddReceiverUsernameToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :receiver_username, :string
  end
end
