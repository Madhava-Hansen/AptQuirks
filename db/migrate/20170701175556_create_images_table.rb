class CreateImagesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :apartment_id, null: false
      t.integer :user_id, null: false
      t.string :url, null: false
      t.string :thumbnail_url, null: false
      
      t.timestamps
    end

    add_index :images, :apartment_id
  end
end
