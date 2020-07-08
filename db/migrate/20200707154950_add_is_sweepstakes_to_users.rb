class AddIsSweepstakesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :isSweepstakes, :boolean
  end
end
