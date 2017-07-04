class AddReceiverImageUrlToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :receiver_image_url, :string
  end
end
