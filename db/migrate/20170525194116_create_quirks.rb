class CreateQuirks < ActiveRecord::Migration[5.0]
  def change
    create_table :quirks do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :apartment_id, null: false
      t.integer :user_id, null: false
      t.string :apt_number

      t.timestamps
    end

    add_index :quirks, :apartment_id
    add_index :quirks, :user_id
  end
end
