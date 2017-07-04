class RemoveReadFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :read
  end
end
