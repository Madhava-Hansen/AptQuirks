class AddLongitudeToApartments < ActiveRecord::Migration[5.0]
  def change
    add_column :apartments, :longitude, :float, null: false
  end
end
