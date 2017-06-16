class DeleteLonFromApartments < ActiveRecord::Migration[5.0]
  def change
    remove_column :apartments, :lon
  end
end
