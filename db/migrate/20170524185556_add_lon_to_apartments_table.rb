class AddLonToApartmentsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :apartments, :lon, :integer, null: false
  end
end
