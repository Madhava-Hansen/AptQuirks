class RemoveSenderIdFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :sender_id
  end
end
