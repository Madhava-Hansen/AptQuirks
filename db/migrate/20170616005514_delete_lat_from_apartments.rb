class DeleteLatFromApartments < ActiveRecord::Migration[5.0]
  def change
    remove_column :apartments, :lat 
  end
end
