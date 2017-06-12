class AddUserNameToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :user_name, :string
  end
end
