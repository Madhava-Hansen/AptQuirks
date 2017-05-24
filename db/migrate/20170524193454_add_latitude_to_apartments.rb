class AddLatitudeToApartments < ActiveRecord::Migration[5.0]
  def change
    add_column :apartments, :latitude, :float, null: false
  end
end
