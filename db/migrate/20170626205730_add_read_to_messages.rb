class AddReadToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :read, :string, null: false
  end
end
