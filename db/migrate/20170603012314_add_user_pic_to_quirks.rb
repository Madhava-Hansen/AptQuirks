class AddUserPicToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :user_pic, :string
  end
end
