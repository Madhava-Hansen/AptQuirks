class AddIndexToApartments < ActiveRecord::Migration[5.0]
  def change
    add_index :apartments, :street_address
  end
end
