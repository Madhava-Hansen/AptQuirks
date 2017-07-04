class RemoveReceiveIdColumnFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :receiver_id
  end
end
